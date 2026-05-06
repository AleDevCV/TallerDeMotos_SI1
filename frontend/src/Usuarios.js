// frontend/src/Usuarios.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Reutilizamos los colores y estilos base
import { logoutUniversal } from './auth';
import { getHomeRouteByRole } from './navigation';
import { repairText } from './textNormalization';

const CLIENT_TEMP_PASSWORD = 'zaq12wsx';

const normalizarTextoCorreo = (texto) => {
  return (texto || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
};

const generarCorreoCliente = (nombreCompleto, usuariosActuales = []) => {
  const base = normalizarTextoCorreo(nombreCompleto) || 'cliente';
  const existentes = new Set(usuariosActuales.map((usuario) => (usuario.email || '').toLowerCase()));

  let candidato = `${base}@laroca.com`;
  let contador = 1;

  while (existentes.has(candidato)) {
    candidato = `${base}${contador}@laroca.com`;
    contador += 1;
  }

  return candidato;
};

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [roles, setRoles] = useState([]);
  const [clientesElegibles, setClientesElegibles] = useState([]);
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');
  const [mostrarGeneradorCliente, setMostrarGeneradorCliente] = useState(false);
  const [busquedaCliente, setBusquedaCliente] = useState('');
  const navigate = useNavigate();
  const usuarioLocal = JSON.parse(localStorage.getItem('usuario'));

  // Estado para el formulario del nuevo usuario
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: '', email: '', password: '', telefono: '', id_rol: ''
  });
  const [usuarioEdicion, setUsuarioEdicion] = useState(null);
  const [editUsuario, setEditUsuario] = useState({ nombre: '', telefono: '', id_rol: '' });

    useEffect(() => {
        // 1. Verificamos la seguridad
        const usuarioLocal = JSON.parse(localStorage.getItem('usuario'));
        if (!usuarioLocal || usuarioLocal.rol !== 'Administrador') {
        alert("Acceso denegado: Solo el Administrador puede gestionar usuarios.");
        navigate(getHomeRouteByRole(usuarioLocal?.rol));
        return;
        }
        
        // 2. Cargamos los datos (solo si somos administradores)
        cargarDatos();
        
        // El arreglo vacío [] es OBLIGATORIO para evitar el bucle infinito.
        // Le dice a React: "Ejecuta esto SOLO UNA VEZ al montar el componente".
    }, [navigate]);

  const cargarDatos = () => {
    const token = localStorage.getItem('token');
    setError('');
    setOk('');

    // Pedimos los usuarios
    fetch('https://tallermotoslaroca.azurewebsites.net/api/usuarios/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'No se pudo cargar usuarios.');
        setUsuarios(data);
      })
      .catch((err) => setError(err.message));
    
    // Pedimos los roles (Para llenar el "select" del formulario)
    fetch('https://tallermotoslaroca.azurewebsites.net/api/roles/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'No se pudo cargar roles.');
        setRoles(data);
      })
      .catch((err) => setError(err.message));
  };

  const cargarClientesElegibles = async () => {
    try {
      setError('');
      setOk('');
      const token = localStorage.getItem('token');
      const [clientesRes, usuariosRes] = await Promise.all([
        fetch('https://tallermotoslaroca.azurewebsites.net/api/clientes/', {
          headers: { 'Authorization': `Bearer ${token}` },
        }),
        fetch('https://tallermotoslaroca.azurewebsites.net/api/usuarios/', {
          headers: { 'Authorization': `Bearer ${token}` },
        }),
      ]);

      const [clientesData, usuariosData] = await Promise.all([
        clientesRes.json(),
        usuariosRes.json(),
      ]);

      if (!clientesRes.ok) throw new Error(clientesData.error || 'No se pudo cargar clientes.');
      if (!usuariosRes.ok) throw new Error(usuariosData.error || 'No se pudo cargar usuarios.');

      const usuariosClienteActivos = new Set(
        (Array.isArray(usuariosData) ? usuariosData : [])
          .filter((usuario) => (usuario.rol_nombre || '') === 'Cliente' && (usuario.estado || 'Activo') === 'Activo')
          .map((usuario) => (usuario.nombre || '').trim().toLowerCase())
      );

      const elegibles = (Array.isArray(clientesData) ? clientesData : []).filter((cliente) => {
        if ((cliente.estado || 'Activo') !== 'Activo') return false;
        return !usuariosClienteActivos.has((cliente.nombre || '').trim().toLowerCase());
      });

      setClientesElegibles(elegibles);
      setMostrarGeneradorCliente(true);
    } catch (err) {
      setError(err.message || 'No se pudieron cargar los clientes elegibles.');
    }
  };

  const crearUsuarioCliente = async (cliente) => {
    try {
      setError('');
      setOk('');
      const token = localStorage.getItem('token');
      const rolCliente = roles.find((rol) => rol.nombre === 'Cliente');

      if (!rolCliente) {
        setError('No se encontró el rol Cliente.');
        return;
      }

      const email = generarCorreoCliente(cliente.nombre, usuarios);
      const respuesta = await fetch('https://tallermotoslaroca.azurewebsites.net/api/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre: cliente.nombre,
          email,
          password: CLIENT_TEMP_PASSWORD,
          telefono: cliente.telefono || '',
          id_rol: rolCliente.codigo,
        }),
      });

      const datos = await respuesta.json();
      if (!respuesta.ok) {
        setError(datos.error || 'No se pudo generar el usuario del cliente.');
        return;
      }

      setOk(`Usuario generado para ${cliente.nombre} con email ${email} y contraseña temporal ${CLIENT_TEMP_PASSWORD}.`);
      await cargarDatos();
      await cargarClientesElegibles();
    } catch {
      setError('Error de conexión al generar usuario cliente.');
    }
  };

  const manejarCambio = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const crearUsuario = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const respuesta = await fetch('https://tallermotoslaroca.azurewebsites.net/api/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...nuevoUsuario,
        })
      });
      const datos = await respuesta.json();
      
      if (datos.exito) {
        setError('');
        setNuevoUsuario({ nombre: '', email: '', password: '', telefono: '', id_rol: '' }); // Limpiar formulario
        cargarDatos(); // Recargar la tabla
      } else {
        setError(datos.error || 'No se pudo crear usuario.');
      }
    } catch (error) {
      setError("Error de conexión al servidor");
    }
  };

  const abrirEdicionUsuario = (usuario) => {
    setUsuarioEdicion(usuario);
    setEditUsuario({
      nombre: usuario.nombre || '',
      telefono: usuario.telefono || '',
      id_rol: String(usuario.id_rol || ''),
    });
  };

  const guardarEdicionUsuario = async (e) => {
    e.preventDefault();
    if (!usuarioEdicion) return;

    const idRol = parseInt(editUsuario.id_rol, 10);
    if (Number.isNaN(idRol)) return setError('ID de rol inválido.');

    try {
      const token = localStorage.getItem('token');
      const respuesta = await fetch(`https://tallermotoslaroca.azurewebsites.net/api/usuarios/${usuarioEdicion.codigo}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ nombre: editUsuario.nombre, telefono: editUsuario.telefono, id_rol: idRol }),
      });

      const datos = await respuesta.json();
      if (!respuesta.ok) {
        setError(datos.error || 'No se pudo editar usuario.');
        return;
      }

      setError('');
      setUsuarioEdicion(null);
      cargarDatos();
    } catch {
      setError('Error de conexión al editar usuario.');
    }
  };

  const cambiarEstadoUsuario = async (usuario) => {
    const nuevoEstado = usuario.estado === 'Activo' ? 'Inactivo' : 'Activo';

    if (!window.confirm(`¿Cambiar estado de ${usuario.nombre} a ${nuevoEstado}?`)) return;

    try {
      const token = localStorage.getItem('token');
      const respuesta = await fetch(`https://tallermotoslaroca.azurewebsites.net/api/usuarios/${usuario.codigo}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ estado: nuevoEstado }),
      });

      const datos = await respuesta.json();
      if (!respuesta.ok) {
        setError(datos.error || 'No se pudo actualizar estado.');
        return;
      }

      setError('');
      cargarDatos();
    } catch {
      setError('Error de conexión al cambiar estado.');
    }
  };

  const cerrarSesion = async () => {
    await logoutUniversal();
    navigate('/login');
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      {/* Barra de Navegación Simple */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestión de Usuarios (CU02)</h2>
        <div>
          <button onClick={() => navigate('/roles-permisos')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Roles y Permisos
          </button>
          <button onClick={cargarClientesElegibles} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Generar usuario cliente
          </button>
          <button onClick={() => navigate('/bitacora')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Ir a Bitácora
          </button>
          <button onClick={cerrarSesion} style={{ padding: '8px 16px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {error && <div className="error-box" style={{ width: '100%', marginBottom: '10px' }}>{error}</div>}
        {ok && <div style={{ width: '100%', marginBottom: '10px', backgroundColor: 'rgba(0,255,0,0.12)', color: '#7dff7d', padding: '10px 12px', borderRadius: '6px' }}>{ok}</div>}
        
        {/* PANEL IZQUIERDO: Formulario para Crear Usuario */}
        <div style={{ flex: '1', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', minWidth: '300px' }}>
          <h3 style={{ color: '#ccc', marginBottom: '20px' }}>Crear Nuevo Usuario</h3>
          <form onSubmit={crearUsuario}>
            <div className="input-group">
              <label>Nombre Completo</label>
              <input type="text" name="nombre" value={nuevoUsuario.nombre} onChange={manejarCambio} required />
            </div>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input type="email" name="email" value={nuevoUsuario.email} onChange={manejarCambio} required />
            </div>
            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" name="password" value={nuevoUsuario.password} onChange={manejarCambio} required />
            </div>
            <div className="input-group">
              <label>Teléfono</label>
              <input type="text" name="telefono" value={nuevoUsuario.telefono} onChange={manejarCambio} />
            </div>
            <div className="input-group">
              <label>Rol del Sistema</label>
              <select name="id_rol" value={nuevoUsuario.id_rol} onChange={manejarCambio} required style={{ width: '100%', padding: '12px', borderRadius: '5px', backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}>
                <option value="">-- Seleccione un Rol --</option>
                {roles.map(rol => (
                  <option key={rol.codigo} value={rol.codigo}>{repairText(rol.nombre)}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-login">Registrar Usuario</button>
          </form>
        </div>

        {/* PANEL DERECHO: Tabla de Usuarios Existentes */}
        <div style={{ flex: '2', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', minWidth: '400px' }}>
          <h3 style={{ color: '#ccc', marginBottom: '20px' }}>Usuarios del Sistema</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ff6600', color: '#ccc' }}>
                <th style={{ padding: '12px' }}>Nombre</th>
                <th style={{ padding: '12px' }}>Email</th>
                <th style={{ padding: '12px' }}>Rol</th>
                <th style={{ padding: '12px' }}>Estado</th>
                <th style={{ padding: '12px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.codigo} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '12px' }}>{repairText(u.nombre)}</td>
                  <td style={{ padding: '12px' }}>{u.email}</td>
                  <td style={{ padding: '12px', color: '#ff6600' }}>{repairText(u.rol_nombre)}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ backgroundColor: u.estado === 'Activo' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)', color: u.estado === 'Activo' ? '#00ff00' : '#ff4d4d', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                      {u.estado}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <button onClick={() => abrirEdicionUsuario(u)} style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>
                      Editar
                    </button>
                    <button onClick={() => cambiarEstadoUsuario(u)} style={{ backgroundColor: u.estado === 'Activo' ? '#8f2d2d' : '#2d8f5a', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>
                      {u.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {usuarioEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '460px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar usuario</h3>
            <form onSubmit={guardarEdicionUsuario}>
              <div className="input-group">
                <label>Nombre</label>
                <input value={editUsuario.nombre} onChange={(e) => setEditUsuario({ ...editUsuario, nombre: e.target.value })} required />
              </div>
              <div className="input-group">
                <label>Teléfono</label>
                <input value={editUsuario.telefono} onChange={(e) => setEditUsuario({ ...editUsuario, telefono: e.target.value })} />
              </div>
              <div className="input-group">
                <label>Rol</label>
                <select
                  value={editUsuario.id_rol}
                  onChange={(e) => setEditUsuario({ ...editUsuario, id_rol: e.target.value })}
                  required
                  style={{ width: '100%', padding: '12px', borderRadius: '5px', backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
                >
                  <option value="">-- Seleccione un Rol --</option>
                  {roles.map((rol) => (
                    <option key={rol.codigo} value={rol.codigo}>{repairText(rol.nombre)}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setUsuarioEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {mostrarGeneradorCliente && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60, padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '860px', maxHeight: '85vh', overflow: 'auto', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ margin: 0, color: '#ff6600' }}>Generar usuario cliente</h3>
                <p style={{ margin: '6px 0 0', color: '#bbb' }}>Se muestran solo clientes activos que aún no tienen una cuenta Cliente activa.</p>
              </div>
              <button type="button" onClick={() => setMostrarGeneradorCliente(false)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cerrar</button>
            </div>

            <div className="input-group" style={{ marginBottom: '16px' }}>
              <label>Buscar cliente</label>
              <input value={busquedaCliente} onChange={(e) => setBusquedaCliente(e.target.value)} placeholder="Nombre o cédula" />
            </div>

            <div style={{ marginBottom: '16px', color: '#bbb' }}>
              Contraseña temporal: <strong style={{ color: '#ff6600' }}>{CLIENT_TEMP_PASSWORD}</strong>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ff6600', color: '#ccc' }}>
                  <th style={{ padding: '12px' }}>Cliente</th>
                  <th style={{ padding: '12px' }}>Cédula</th>
                  <th style={{ padding: '12px' }}>Teléfono</th>
                  <th style={{ padding: '12px' }}>Email sugerido</th>
                  <th style={{ padding: '12px' }}>Acción</th>
                </tr>
              </thead>
              <tbody>
                {clientesElegibles
                  .filter((cliente) => {
                    const filtro = busquedaCliente.trim().toLowerCase();
                    if (!filtro) return true;
                    return (cliente.nombre || '').toLowerCase().includes(filtro) || (cliente.cedula || '').toLowerCase().includes(filtro);
                  })
                  .map((cliente) => {
                    const emailSugerido = generarCorreoCliente(cliente.nombre, usuarios);
                    return (
                      <tr key={cliente.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                        <td style={{ padding: '12px' }}>{cliente.nombre}</td>
                        <td style={{ padding: '12px' }}>{cliente.cedula}</td>
                        <td style={{ padding: '12px' }}>{cliente.telefono || '-'}</td>
                        <td style={{ padding: '12px', color: '#ff6600' }}>{emailSugerido}</td>
                        <td style={{ padding: '12px' }}>
                          <button
                            type="button"
                            onClick={() => crearUsuarioCliente(cliente)}
                            style={{ backgroundColor: '#2d8f5a', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                          >
                            Crear cuenta
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                {clientesElegibles.filter((cliente) => {
                  const filtro = busquedaCliente.trim().toLowerCase();
                  if (!filtro) return true;
                  return (cliente.nombre || '').toLowerCase().includes(filtro) || (cliente.cedula || '').toLowerCase().includes(filtro);
                }).length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: '#bbb' }}>
                      No hay clientes elegibles para generar usuario.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usuarios;