import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';

const API = 'https://tallermotoslaroca.azurewebsites.net/api';

const Clientes = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarInactivos, setMostrarInactivos] = useState(false);
  const [error, setError] = useState('');
  const [nuevo, setNuevo] = useState({
    cedula: '',
    nombre: '',
    telefono: '',
    telefono_alternativo: '',
    direccion: '',
    email: '',
  });
  const [clienteEdicion, setClienteEdicion] = useState(null);
  const [editForm, setEditForm] = useState({ nombre: '', telefono: '' });

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    if (!usuarioLocal || !['Administrador', 'Recepcionista'].includes(usuarioLocal.rol)) {
      alert('Acceso denegado para gestión de clientes.');
      navigate(getHomeRouteByRole(usuarioLocal?.rol));
      return;
    }
    cargarClientes('', mostrarInactivos);
  }, [navigate, usuarioLocal]);

  const cargarClientes = async (q = '', incluirInactivos = mostrarInactivos) => {
    try {
      setError('');
      const params = new URLSearchParams();
      if (q) params.append('q', q);
      if (incluirInactivos) params.append('incluir_inactivos', 'true');

      const query = params.toString();
      const url = query ? `${API}/clientes/?${query}` : `${API}/clientes/`;
      const res = await fetch(url, { headers: headers(false) });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar clientes.');
      setClientes(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexión cargando clientes.');
    }
  };

  const crearCliente = async (e) => {
    e.preventDefault();
    setError('');
    const res = await fetch(`${API}/clientes/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(nuevo),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));

    setNuevo({ cedula: '', nombre: '', telefono: '', telefono_alternativo: '', direccion: '', email: '' });
    await cargarClientes(busqueda, mostrarInactivos);
  };

  const abrirEdicion = (cliente) => {
    setClienteEdicion(cliente);
    setEditForm({
      nombre: cliente.nombre || '',
      telefono: cliente.telefono || '',
    });
  };

  const guardarEdicion = async (e) => {
    e.preventDefault();
    if (!clienteEdicion) return;

    const res = await fetch(`${API}/clientes/${clienteEdicion.codigo}/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(editForm),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));

    setClienteEdicion(null);
    await cargarClientes(busqueda, mostrarInactivos);
  };

  const cambiarEstadoCliente = async (cliente) => {
    const estadoActual = cliente.estado || 'Activo';
    const estaInactivo = estadoActual === 'Inactivo';

    const confirmar = estaInactivo
      ? window.confirm(`¿Activar cliente ${cliente.nombre}?`)
      : window.confirm(`¿Desactivar cliente ${cliente.nombre}?`);

    if (!confirmar) return;

    const res = await fetch(`${API}/clientes/${cliente.codigo}/`, {
      method: estaInactivo ? 'PUT' : 'DELETE',
      headers: headers(estaInactivo),
      body: estaInactivo ? JSON.stringify({ estado: 'Activo' }) : undefined,
    });

    const data = await res.json();
    if (!res.ok) {
      return setError(
        data.error
          || (estaInactivo ? 'No se pudo activar cliente.' : 'No se pudo desactivar cliente.')
      );
    }

    await cargarClientes(busqueda, mostrarInactivos);
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestión de Clientes (CU05)</h2>
        <div>
          <button onClick={() => navigate('/motocicletas')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Motocicletas</button>
          <button onClick={() => navigate('/perfil')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
          <button onClick={() => navigate(getHomeRouteByRole(usuarioLocal?.rol))} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Registrar Cliente</h3>
          <form onSubmit={crearCliente}>
            <div className="input-group"><label>Cédula/NIT</label><input value={nuevo.cedula} onChange={(e) => setNuevo({ ...nuevo, cedula: e.target.value })} required /></div>
            <div className="input-group"><label>Nombre</label><input value={nuevo.nombre} onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })} required /></div>
            <div className="input-group"><label>Teléfono</label><input value={nuevo.telefono} onChange={(e) => setNuevo({ ...nuevo, telefono: e.target.value })} /></div>
            <div className="input-group"><label>Teléfono alternativo</label><input value={nuevo.telefono_alternativo} onChange={(e) => setNuevo({ ...nuevo, telefono_alternativo: e.target.value })} /></div>
            <div className="input-group"><label>Dirección</label><input value={nuevo.direccion} onChange={(e) => setNuevo({ ...nuevo, direccion: e.target.value })} /></div>
            <div className="input-group"><label>Email</label><input type="email" value={nuevo.email} onChange={(e) => setNuevo({ ...nuevo, email: e.target.value })} /></div>
            <button type="submit" className="btn-login">Crear cliente</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <h3 style={{ margin: 0 }}>Listado</h3>
            <div>
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por nombre o cédula"
                style={{ padding: '8px', width: '260px', marginRight: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#2a2a2a', color: 'white' }}
              />
              <label style={{ marginRight: '10px', fontSize: '13px' }}>
                <input
                  type="checkbox"
                  checked={mostrarInactivos}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setMostrarInactivos(checked);
                    cargarClientes(busqueda, checked);
                  }}
                  style={{ marginRight: '6px' }}
                />
                Mostrar inactivos
              </label>
              <button onClick={() => cargarClientes(busqueda, mostrarInactivos)} style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Buscar</button>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Cédula</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Nombre</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Teléfono</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Estado</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c) => (
                <tr
                  key={c.codigo}
                  style={{
                    borderBottom: '1px solid #2c2c2c',
                    opacity: (c.estado || 'Activo') === 'Inactivo' ? 0.55 : 1,
                    color: (c.estado || 'Activo') === 'Inactivo' ? '#ff8f8f' : 'white',
                  }}
                >
                  <td style={{ padding: '8px' }}>{c.cedula}</td>
                  <td style={{ padding: '8px' }}>{c.nombre}</td>
                  <td style={{ padding: '8px' }}>{c.telefono || '-'}</td>
                  <td style={{ padding: '8px' }}>
                    <span
                      style={{
                        backgroundColor: (c.estado || 'Activo') === 'Activo' ? 'rgba(0,255,0,0.15)' : 'rgba(255,0,0,0.15)',
                        color: (c.estado || 'Activo') === 'Activo' ? '#7dff7d' : '#ff8f8f',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '12px',
                      }}
                    >
                      {c.estado || 'Activo'}
                    </span>
                  </td>
                  <td style={{ padding: '8px' }}>
                    <button onClick={() => abrirEdicion(c)} style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Editar</button>
                    <button
                      onClick={() => cambiarEstadoCliente(c)}
                      style={{
                        backgroundColor: (c.estado || 'Activo') === 'Inactivo' ? '#2d8f5a' : '#8f2d2d',
                        border: 'none',
                        color: 'white',
                        borderRadius: '4px',
                        padding: '6px 10px',
                        cursor: 'pointer',
                      }}
                    >
                      {(c.estado || 'Activo') === 'Inactivo' ? 'Activar' : 'Desactivar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {clienteEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '460px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar cliente</h3>
            <form onSubmit={guardarEdicion}>
              <div className="input-group"><label>Nombre</label><input value={editForm.nombre} onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })} required /></div>
              <div className="input-group"><label>Teléfono</label><input value={editForm.telefono} onChange={(e) => setEditForm({ ...editForm, telefono: e.target.value })} /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setClienteEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clientes;
