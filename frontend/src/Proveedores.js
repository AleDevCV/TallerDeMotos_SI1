import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { API_BASE_URL } from './config';

const API = `${API_BASE_URL}/api`;

const Proveedores = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [proveedores, setProveedores] = useState([]);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const [mostrarNuevo, setMostrarNuevo] = useState(false);
  const [proveedorEdicion, setProveedorEdicion] = useState(null);
  const [nuevo, setNuevo] = useState({
    empresa: '',
    nit: '',
    contacto: '',
    telefono: '',
    email: '',
    direccion: '',
  });
  const [editForm, setEditForm] = useState({
    empresa: '',
    nit: '',
    contacto: '',
    telefono: '',
    email: '',
    direccion: '',
  });

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    if (!usuarioLocal || usuarioLocal.rol !== 'Administrador') {
      alert('Acceso denegado para gestion de proveedores.');
      navigate(getHomeRouteByRole(usuarioLocal?.rol));
      return;
    }
    cargarProveedores();
  }, [navigate, usuarioLocal]);

  const cargarProveedores = async () => {
    try {
      setError('');
      setCargando(true);
      const res = await fetch(`${API}/proveedores/`, { headers: headers(false) });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar proveedores.');
      setProveedores(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexion cargando proveedores.');
    } finally {
      setCargando(false);
    }
  };

  const abrirNuevo = () => {
    setError('');
    setNuevo({ empresa: '', nit: '', contacto: '', telefono: '', email: '', direccion: '' });
    setMostrarNuevo(true);
  };

  const crearProveedor = async (e) => {
    e.preventDefault();
    setError('');
    const res = await fetch(`${API}/proveedores/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(nuevo),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data));

    setMostrarNuevo(false);
    await cargarProveedores();
  };

  const abrirEdicion = (proveedor) => {
    setError('');
    setProveedorEdicion(proveedor);
    setEditForm({
      empresa: proveedor.empresa || '',
      nit: proveedor.nit || '',
      contacto: proveedor.contacto || '',
      telefono: proveedor.telefono || '',
      email: proveedor.email || '',
      direccion: proveedor.direccion || '',
    });
  };

  const guardarEdicion = async (e) => {
    e.preventDefault();
    if (!proveedorEdicion) return;

    const res = await fetch(`${API}/proveedores/${proveedorEdicion.codigo}/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(editForm),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data));

    setProveedorEdicion(null);
    await cargarProveedores();
  };

  const eliminarProveedor = async (proveedor) => {
    const confirmar = window.confirm(`Eliminar proveedor ${proveedor.empresa}?`);
    if (!confirmar) return;

    const res = await fetch(`${API}/proveedores/${proveedor.codigo}/`, {
      method: 'DELETE',
      headers: headers(false),
    });

    if (!res.ok) {
      const data = await res.json();
      return setError(data.error || 'No se pudo eliminar proveedor.');
    }

    await cargarProveedores();
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestion de Proveedores (CU13)</h2>
        <div>
          <button
            onClick={() => navigate('/perfil')}
            style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Mi Perfil
          </button>
          <button
            onClick={() => navigate(getHomeRouteByRole(usuarioLocal?.rol))}
            style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Inicio
          </button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h3 style={{ margin: 0 }}>Listado</h3>
        <button
          onClick={abrirNuevo}
          style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Nuevo Proveedor
        </button>
      </div>

      <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #444' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Empresa</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>NIT</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Contacto</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Telefono</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Email</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((p) => (
              <tr key={p.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                <td style={{ padding: '8px' }}>{p.empresa}</td>
                <td style={{ padding: '8px' }}>{p.nit}</td>
                <td style={{ padding: '8px' }}>{p.contacto || '-'}</td>
                <td style={{ padding: '8px' }}>{p.telefono || '-'}</td>
                <td style={{ padding: '8px' }}>{p.email || '-'}</td>
                <td style={{ padding: '8px' }}>
                  <button
                    onClick={() => abrirEdicion(p)}
                    style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarProveedor(p)}
                    style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {!cargando && proveedores.length === 0 && (
              <tr>
                <td colSpan="6" style={{ padding: '12px', color: '#999' }}>Sin proveedores registrados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {mostrarNuevo && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '520px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Nuevo Proveedor</h3>
            <form onSubmit={crearProveedor}>
              <div className="input-group"><label>Empresa</label><input value={nuevo.empresa} onChange={(e) => setNuevo({ ...nuevo, empresa: e.target.value })} required /></div>
              <div className="input-group"><label>NIT</label><input value={nuevo.nit} onChange={(e) => setNuevo({ ...nuevo, nit: e.target.value })} required /></div>
              <div className="input-group"><label>Contacto</label><input value={nuevo.contacto} onChange={(e) => setNuevo({ ...nuevo, contacto: e.target.value })} /></div>
              <div className="input-group"><label>Telefono</label><input value={nuevo.telefono} onChange={(e) => setNuevo({ ...nuevo, telefono: e.target.value })} /></div>
              <div className="input-group"><label>Email</label><input type="email" value={nuevo.email} onChange={(e) => setNuevo({ ...nuevo, email: e.target.value })} /></div>
              <div className="input-group"><label>Direccion</label><input value={nuevo.direccion} onChange={(e) => setNuevo({ ...nuevo, direccion: e.target.value })} /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setMostrarNuevo(false)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {proveedorEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '520px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar Proveedor</h3>
            <form onSubmit={guardarEdicion}>
              <div className="input-group"><label>Empresa</label><input value={editForm.empresa} onChange={(e) => setEditForm({ ...editForm, empresa: e.target.value })} required /></div>
              <div className="input-group"><label>NIT</label><input value={editForm.nit} onChange={(e) => setEditForm({ ...editForm, nit: e.target.value })} required /></div>
              <div className="input-group"><label>Contacto</label><input value={editForm.contacto} onChange={(e) => setEditForm({ ...editForm, contacto: e.target.value })} /></div>
              <div className="input-group"><label>Telefono</label><input value={editForm.telefono} onChange={(e) => setEditForm({ ...editForm, telefono: e.target.value })} /></div>
              <div className="input-group"><label>Email</label><input type="email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} /></div>
              <div className="input-group"><label>Direccion</label><input value={editForm.direccion} onChange={(e) => setEditForm({ ...editForm, direccion: e.target.value })} /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setProveedorEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proveedores;
