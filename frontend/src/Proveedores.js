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
  const [nuevo, setNuevo] = useState({
    empresa: '',
    nit: '',
    contacto: '',
    telefono: '',
    email: '',
    direccion: '',
  });
  const [proveedorEdicion, setProveedorEdicion] = useState(null);
  const [editForm, setEditForm] = useState({
    empresa: '',
    contacto: '',
    telefono: '',
    email: '',
    direccion: '',
  });

  const consultarProveedor = () => {
    cargarProveedores();
  };

  const actualizarProveedor = async (proveedorActualizado) => {
    setProveedorEdicion(proveedorActualizado);
    setEditForm({
      empresa: proveedorActualizado.empresa || '',
      contacto: proveedorActualizado.contacto || '',
      telefono: proveedorActualizado.telefono || '',
      email: proveedorActualizado.email || '',
      direccion: proveedorActualizado.direccion || '',
    });
  };

  const registrarNuevoProveedor = async (e) => {
    await crearProveedor(e);
  };

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    if (!usuarioLocal || !['Administrador', 'Recepcionista'].includes(usuarioLocal.rol)) {
      alert('Acceso denegado para gestión de proveedores.');
      navigate(getHomeRouteByRole(usuarioLocal?.rol));
      return;
    }

    cargarProveedores();
  }, [navigate, usuarioLocal]);

  const cargarProveedores = async () => {
    try {
      setError('');
      const res = await fetch(`${API}/proveedores/`, {
        headers: headers(false),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar proveedores.');
      setProveedores(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexión cargando proveedores.');
    }
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
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));
    setNuevo({ empresa: '', nit: '', contacto: '', telefono: '', email: '', direccion: '' });
    await cargarProveedores();
  };

  const abrirEdicion = (proveedor) => {
    setProveedorEdicion(proveedor);
    setEditForm({
      empresa: proveedor.empresa || '',
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
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));

    setProveedorEdicion(null);
    await cargarProveedores();
  };

  const eliminarProveedor = async (proveedor) => {
    if (!window.confirm(`¿Eliminar proveedor ${proveedor.empresa}?`)) return;
    setError('');
    const res = await fetch(`${API}/proveedores/${proveedor.codigo}/`, {
      method: 'DELETE',
      headers: headers(false),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'No se pudo eliminar el proveedor.');
    await cargarProveedores();
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestión de Proveedores (CU13)</h2>
        <div>
          <button onClick={() => navigate('/inicio')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Registrar proveedor</h3>
          <form onSubmit={crearProveedor}>
            <div className="input-group"><label>Empresa</label><input value={nuevo.empresa} onChange={(e) => setNuevo({ ...nuevo, empresa: e.target.value })} required /></div>
            <div className="input-group"><label>NIT</label><input value={nuevo.nit} onChange={(e) => setNuevo({ ...nuevo, nit: e.target.value })} required /></div>
            <div className="input-group"><label>Contacto</label><input value={nuevo.contacto} onChange={(e) => setNuevo({ ...nuevo, contacto: e.target.value })} /></div>
            <div className="input-group"><label>Teléfono</label><input value={nuevo.telefono} onChange={(e) => setNuevo({ ...nuevo, telefono: e.target.value })} /></div>
            <div className="input-group"><label>Email</label><input type="email" value={nuevo.email} onChange={(e) => setNuevo({ ...nuevo, email: e.target.value })} /></div>
            <div className="input-group"><label>Dirección</label><input value={nuevo.direccion} onChange={(e) => setNuevo({ ...nuevo, direccion: e.target.value })} /></div>
            <button type="submit" className="btn-login">Crear proveedor</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Listado de proveedores</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Código</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Empresa</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>NIT</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Contacto</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Teléfono</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Email</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Dirección</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map((p) => (
                <tr key={p.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                  <td style={{ padding: '8px' }}>#{p.codigo}</td>
                  <td style={{ padding: '8px' }}>{p.empresa}</td>
                  <td style={{ padding: '8px' }}>{p.nit}</td>
                  <td style={{ padding: '8px' }}>{p.contacto || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.telefono || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.email || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.direccion || '-'}</td>
                  <td style={{ padding: '8px' }}>
                    <button onClick={() => abrirEdicion(p)} style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Editar</button>
                    <button onClick={() => eliminarProveedor(p)} style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {proveedorEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '480px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar proveedor</h3>
            <form onSubmit={guardarEdicion}>
              <div className="input-group"><label>Empresa</label><input value={editForm.empresa} onChange={(e) => setEditForm({ ...editForm, empresa: e.target.value })} required /></div>
              <div className="input-group"><label>Contacto</label><input value={editForm.contacto} onChange={(e) => setEditForm({ ...editForm, contacto: e.target.value })} /></div>
              <div className="input-group"><label>Teléfono</label><input value={editForm.telefono} onChange={(e) => setEditForm({ ...editForm, telefono: e.target.value })} /></div>
              <div className="input-group"><label>Email</label><input type="email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} /></div>
              <div className="input-group"><label>Dirección</label><input value={editForm.direccion} onChange={(e) => setEditForm({ ...editForm, direccion: e.target.value })} /></div>
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