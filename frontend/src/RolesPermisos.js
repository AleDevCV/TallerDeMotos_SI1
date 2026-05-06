import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';

const API = 'https://tallermotoslaroca.azurewebsites.net/api';

const RolesPermisos = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [roles, setRoles] = useState([]);
  const [privilegios, setPrivilegios] = useState([]);
  const [asignaciones, setAsignaciones] = useState([]);
  const [error, setError] = useState('');

  const [nuevoRol, setNuevoRol] = useState({ nombre: '', descripcion: '' });
  const [nuevoPrivilegio, setNuevoPrivilegio] = useState({ nombre: '', descripcion: '' });
  const [asignacion, setAsignacion] = useState({ id_rol: '', id_privilegio: '' });
  const [rolEdicion, setRolEdicion] = useState(null);
  const [privilegioEdicion, setPrivilegioEdicion] = useState(null);
  const [editRol, setEditRol] = useState({ nombre: '', descripcion: '' });
  const [editPrivilegio, setEditPrivilegio] = useState({ nombre: '', descripcion: '' });

  useEffect(() => {
    if (!usuarioLocal || usuarioLocal.rol !== 'Administrador') {
      alert('Acceso denegado: Solo Administrador.');
      navigate(getHomeRouteByRole(usuarioLocal?.rol));
      return;
    }
    cargarDatos();
  }, [navigate, usuarioLocal]);

  const getAuthHeaders = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  const cargarDatos = async () => {
    try {
      setError('');
      const [rolesRes, privilegiosRes, asignacionesRes] = await Promise.all([
        fetch(`${API}/roles/`, { headers: getAuthHeaders(false) }),
        fetch(`${API}/privilegios/`, { headers: getAuthHeaders(false) }),
        fetch(`${API}/roles-privilegios/`, { headers: getAuthHeaders(false) }),
      ]);

      const [rolesData, privilegiosData, asignacionesData] = await Promise.all([
        rolesRes.json(),
        privilegiosRes.json(),
        asignacionesRes.json(),
      ]);

      if (!rolesRes.ok || !privilegiosRes.ok || !asignacionesRes.ok) {
        setError('No se pudieron cargar todos los datos de roles/permisos.');
      }

      setRoles(Array.isArray(rolesData) ? rolesData : []);
      setPrivilegios(Array.isArray(privilegiosData) ? privilegiosData : []);
      setAsignaciones(Array.isArray(asignacionesData) ? asignacionesData : []);
    } catch (error) {
      setError('Error cargando datos de roles/permisos.');
    }
  };

  const crearRol = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/roles/`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(nuevoRol),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo crear rol.');

    setNuevoRol({ nombre: '', descripcion: '' });
    await cargarDatos();
  };

  const eliminarRol = async (id) => {
    if (!window.confirm('¿Seguro que quieres eliminar este rol?')) return;

    const res = await fetch(`${API}/roles/${id}/`, {
      method: 'DELETE',
      headers: getAuthHeaders(false),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo eliminar rol.');

    await cargarDatos();
  };

  const abrirEdicionRol = (rol) => {
    setRolEdicion(rol);
    setEditRol({ nombre: rol.nombre || '', descripcion: rol.descripcion || '' });
  };

  const guardarEdicionRol = async (e) => {
    e.preventDefault();
    if (!rolEdicion) return;

    const res = await fetch(`${API}/roles/${rolEdicion.codigo}/`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(editRol),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo actualizar rol.');

    setRolEdicion(null);
    await cargarDatos();
  };

  const crearPrivilegio = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/privilegios/`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(nuevoPrivilegio),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo crear privilegio.');

    setNuevoPrivilegio({ nombre: '', descripcion: '' });
    await cargarDatos();
  };

  const eliminarPrivilegio = async (id) => {
    if (!window.confirm('¿Seguro que quieres eliminar este privilegio?')) return;

    const res = await fetch(`${API}/privilegios/${id}/`, {
      method: 'DELETE',
      headers: getAuthHeaders(false),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo eliminar privilegio.');

    await cargarDatos();
  };

  const abrirEdicionPrivilegio = (privilegio) => {
    setPrivilegioEdicion(privilegio);
    setEditPrivilegio({ nombre: privilegio.nombre || '', descripcion: privilegio.descripcion || '' });
  };

  const guardarEdicionPrivilegio = async (e) => {
    e.preventDefault();
    if (!privilegioEdicion) return;

    const res = await fetch(`${API}/privilegios/${privilegioEdicion.codigo}/`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(editPrivilegio),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo actualizar privilegio.');

    setPrivilegioEdicion(null);
    await cargarDatos();
  };

  const asignarPrivilegio = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/roles-privilegios/`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(asignacion),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo asignar privilegio.');

    setAsignacion({ id_rol: '', id_privilegio: '' });
    await cargarDatos();
  };

  const revocarPrivilegio = async (idRol, idPrivilegio) => {
    const res = await fetch(`${API}/roles-privilegios/`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
      body: JSON.stringify({ id_rol: idRol, id_privilegio: idPrivilegio }),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'No se pudo revocar privilegio.');

    await cargarDatos();
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestión de Roles y Permisos (CU03/CU04)</h2>
        <div>
          <button
            onClick={() => navigate('/usuarios')}
            style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Ir a Usuarios
          </button>
          <button
            onClick={() => navigate('/bitacora')}
            style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Ir a Bitácora
          </button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Roles</h3>
          <form onSubmit={crearRol}>
            <div className="input-group">
              <label>Nombre del rol</label>
              <input
                value={nuevoRol.nombre}
                onChange={(e) => setNuevoRol({ ...nuevoRol, nombre: e.target.value })}
                required
              />
            </div>
            <div className="input-group">
              <label>Descripción</label>
              <input
                value={nuevoRol.descripcion}
                onChange={(e) => setNuevoRol({ ...nuevoRol, descripcion: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-login">Crear rol</button>
          </form>

          <table style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Rol</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((rol) => (
                <tr key={rol.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                  <td style={{ padding: '8px' }}>{rol.nombre}</td>
                  <td style={{ padding: '8px' }}>
                    <button
                      onClick={() => abrirEdicionRol(rol)}
                      style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarRol(rol.codigo)}
                      style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Privilegios</h3>
          <form onSubmit={crearPrivilegio}>
            <div className="input-group">
              <label>Nombre del privilegio</label>
              <input
                value={nuevoPrivilegio.nombre}
                onChange={(e) => setNuevoPrivilegio({ ...nuevoPrivilegio, nombre: e.target.value })}
                required
              />
            </div>
            <div className="input-group">
              <label>Descripción</label>
              <input
                value={nuevoPrivilegio.descripcion}
                onChange={(e) => setNuevoPrivilegio({ ...nuevoPrivilegio, descripcion: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-login">Crear privilegio</button>
          </form>

          <table style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Privilegio</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {privilegios.map((privilegio) => (
                <tr key={privilegio.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                  <td style={{ padding: '8px' }}>{privilegio.nombre}</td>
                  <td style={{ padding: '8px' }}>
                    <button
                      onClick={() => abrirEdicionPrivilegio(privilegio)}
                      style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarPrivilegio(privilegio.codigo)}
                      style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
        <h3>Asignar/Revoke permisos por rol</h3>
        <form onSubmit={asignarPrivilegio} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <select
            required
            value={asignacion.id_rol}
            onChange={(e) => setAsignacion({ ...asignacion, id_rol: e.target.value })}
            style={{ padding: '10px', backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #444', borderRadius: '5px' }}
          >
            <option value="">Selecciona rol</option>
            {roles.map((rol) => <option key={rol.codigo} value={rol.codigo}>{rol.nombre}</option>)}
          </select>
          <select
            required
            value={asignacion.id_privilegio}
            onChange={(e) => setAsignacion({ ...asignacion, id_privilegio: e.target.value })}
            style={{ padding: '10px', backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #444', borderRadius: '5px' }}
          >
            <option value="">Selecciona privilegio</option>
            {privilegios.map((privilegio) => <option key={privilegio.codigo} value={privilegio.codigo}>{privilegio.nombre}</option>)}
          </select>
          <button type="submit" className="btn-login" style={{ marginTop: 0 }}>Asignar</button>
        </form>

        <table style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #444' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Rol</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Privilegio</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {asignaciones.map((item, idx) => (
              <tr key={`${item.id_rol}-${item.id_privilegio}-${idx}`} style={{ borderBottom: '1px solid #2c2c2c' }}>
                <td style={{ padding: '8px' }}>{item.rol_nombre}</td>
                <td style={{ padding: '8px' }}>{item.privilegio_nombre}</td>
                <td style={{ padding: '8px' }}>
                  <button
                    onClick={() => revocarPrivilegio(item.id_rol, item.id_privilegio)}
                    style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                  >
                    Revocar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rolEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '460px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar rol</h3>
            <form onSubmit={guardarEdicionRol}>
              <div className="input-group"><label>Nombre</label><input value={editRol.nombre} onChange={(e) => setEditRol({ ...editRol, nombre: e.target.value })} required /></div>
              <div className="input-group"><label>Descripción</label><input value={editRol.descripcion} onChange={(e) => setEditRol({ ...editRol, descripcion: e.target.value })} /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setRolEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {privilegioEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '460px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar privilegio</h3>
            <form onSubmit={guardarEdicionPrivilegio}>
              <div className="input-group"><label>Nombre</label><input value={editPrivilegio.nombre} onChange={(e) => setEditPrivilegio({ ...editPrivilegio, nombre: e.target.value })} required /></div>
              <div className="input-group"><label>Descripción</label><input value={editPrivilegio.descripcion} onChange={(e) => setEditPrivilegio({ ...editPrivilegio, descripcion: e.target.value })} /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setPrivilegioEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RolesPermisos;
