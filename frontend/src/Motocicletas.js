import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { API_BASE_URL } from './config';

const API = `${API_BASE_URL}/api`;

const Motocicletas = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [motos, setMotos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarInactivos, setMostrarInactivos] = useState(false);
  const [error, setError] = useState('');
  const [nuevo, setNuevo] = useState({
    id_cliente: '',
    placa: '',
    marca: '',
    modelo: '',
    anio: '',
    cilindraje: '',
    color: '',
    numero_motor: '',
    numero_chasis: '',
    kilometraje_actual: '',
  });
  const [motoEdicion, setMotoEdicion] = useState(null);
  const [editForm, setEditForm] = useState({ marca: '', modelo: '' });

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    if (!usuarioLocal || !['Administrador', 'Recepcionista'].includes(usuarioLocal.rol)) {
      alert('Acceso denegado para gestión de motocicletas.');
      navigate(getHomeRouteByRole(usuarioLocal?.rol));
      return;
    }
    cargarBase();
  }, [navigate, usuarioLocal]);

  const cargarBase = async () => {
    await Promise.all([cargarMotos('', mostrarInactivos), cargarClientes()]);
  };

  const cargarClientes = async () => {
    const res = await fetch(`${API}/clientes/`, { headers: headers(false) });
    const data = await res.json();
    if (res.ok) setClientes(Array.isArray(data) ? data : []);
  };

  const cargarMotos = async (q = '', incluirInactivos = mostrarInactivos) => {
    try {
      setError('');
      const params = new URLSearchParams();
      if (q) params.append('q', q);
      if (incluirInactivos) params.append('incluir_inactivos', 'true');

      const query = params.toString();
      const url = query ? `${API}/motocicletas/?${query}` : `${API}/motocicletas/`;
      const res = await fetch(url, { headers: headers(false) });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar motocicletas.');
      setMotos(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexión cargando motocicletas.');
    }
  };

  const crearMoto = async (e) => {
    e.preventDefault();
    const payload = {
      ...nuevo,
      anio: nuevo.anio ? parseInt(nuevo.anio, 10) : null,
      kilometraje_actual: nuevo.kilometraje_actual || null,
    };

    const res = await fetch(`${API}/motocicletas/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));

    setNuevo({ id_cliente: '', placa: '', marca: '', modelo: '', anio: '', cilindraje: '', color: '', numero_motor: '', numero_chasis: '', kilometraje_actual: '' });
    await cargarMotos(busqueda, mostrarInactivos);
  };

  const abrirEdicion = (moto) => {
    setMotoEdicion(moto);
    setEditForm({ marca: moto.marca || '', modelo: moto.modelo || '' });
  };

  const guardarEdicion = async (e) => {
    e.preventDefault();
    if (!motoEdicion) return;

    const res = await fetch(`${API}/motocicletas/${motoEdicion.codigo}/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(editForm),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));

    setMotoEdicion(null);
    await cargarMotos(busqueda, mostrarInactivos);
  };

  const cambiarEstadoMoto = async (moto) => {
    if ((moto.estado || 'Activo') === 'Inactivo') {
      return setError('La motocicleta ya está inactiva.');
    }

    if (!window.confirm(`¿Desactivar motocicleta ${moto.placa}?`)) return;

    const res = await fetch(`${API}/motocicletas/${moto.codigo}/`, {
      method: 'DELETE',
      headers: headers(false),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'No se pudo desactivar motocicleta.');

    await cargarMotos(busqueda, mostrarInactivos);
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestión de Motocicletas (CU06)</h2>
        <div>
          <button onClick={() => navigate('/clientes')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Clientes</button>
          <button onClick={() => navigate('/perfil')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
          <button onClick={() => navigate(getHomeRouteByRole(usuarioLocal?.rol))} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Registrar Motocicleta</h3>
          <form onSubmit={crearMoto}>
            <div className="input-group">
              <label>Cliente</label>
              <select
                value={nuevo.id_cliente}
                onChange={(e) => setNuevo({ ...nuevo, id_cliente: e.target.value })}
                required
                style={{ width: '100%', padding: '12px', borderRadius: '5px', backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
              >
                <option value="">Selecciona cliente</option>
                {clientes.map((c) => (
                  <option key={c.codigo} value={c.codigo}>{c.nombre} - {c.cedula}</option>
                ))}
              </select>
            </div>
            <div className="input-group"><label>Placa</label><input value={nuevo.placa} onChange={(e) => setNuevo({ ...nuevo, placa: e.target.value })} required /></div>
            <div className="input-group"><label>Marca</label><input value={nuevo.marca} onChange={(e) => setNuevo({ ...nuevo, marca: e.target.value })} /></div>
            <div className="input-group"><label>Modelo</label><input value={nuevo.modelo} onChange={(e) => setNuevo({ ...nuevo, modelo: e.target.value })} /></div>
            <div className="input-group"><label>Año</label><input type="number" value={nuevo.anio} onChange={(e) => setNuevo({ ...nuevo, anio: e.target.value })} /></div>
            <button type="submit" className="btn-login">Crear motocicleta</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <h3 style={{ margin: 0 }}>Listado</h3>
            <div>
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por placa"
                style={{ padding: '8px', width: '260px', marginRight: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#2a2a2a', color: 'white' }}
              />
              <label style={{ marginRight: '10px', fontSize: '13px' }}>
                <input
                  type="checkbox"
                  checked={mostrarInactivos}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setMostrarInactivos(checked);
                    cargarMotos(busqueda, checked);
                  }}
                  style={{ marginRight: '6px' }}
                />
                Mostrar inactivas
              </label>
              <button onClick={() => cargarMotos(busqueda, mostrarInactivos)} style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Buscar</button>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Placa</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Marca/Modelo</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Cliente</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Estado</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {motos.map((m) => (
                <tr
                  key={m.codigo}
                  style={{
                    borderBottom: '1px solid #2c2c2c',
                    opacity: (m.estado || 'Activo') === 'Inactivo' ? 0.55 : 1,
                    color: (m.estado || 'Activo') === 'Inactivo' ? '#ff8f8f' : 'white',
                  }}
                >
                  <td style={{ padding: '8px' }}>{m.placa}</td>
                  <td style={{ padding: '8px' }}>{(m.marca || '-') + ' / ' + (m.modelo || '-')}</td>
                  <td style={{ padding: '8px' }}>{m.cliente_nombre || '-'}</td>
                  <td style={{ padding: '8px' }}>
                    <span
                      style={{
                        backgroundColor: (m.estado || 'Activo') === 'Activo' ? 'rgba(0,255,0,0.15)' : 'rgba(255,0,0,0.15)',
                        color: (m.estado || 'Activo') === 'Activo' ? '#7dff7d' : '#ff8f8f',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '12px',
                      }}
                    >
                      {m.estado || 'Activo'}
                    </span>
                  </td>
                  <td style={{ padding: '8px' }}>
                    <button onClick={() => abrirEdicion(m)} style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Editar</button>
                    <button
                      onClick={() => cambiarEstadoMoto(m)}
                      disabled={(m.estado || 'Activo') === 'Inactivo'}
                      style={{
                        backgroundColor: '#8f2d2d',
                        border: 'none',
                        color: 'white',
                        borderRadius: '4px',
                        padding: '6px 10px',
                        cursor: (m.estado || 'Activo') === 'Inactivo' ? 'not-allowed' : 'pointer',
                        opacity: (m.estado || 'Activo') === 'Inactivo' ? 0.5 : 1,
                      }}
                    >
                      Desactivar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {motoEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '460px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar motocicleta</h3>
            <form onSubmit={guardarEdicion}>
              <div className="input-group"><label>Marca</label><input value={editForm.marca} onChange={(e) => setEditForm({ ...editForm, marca: e.target.value })} /></div>
              <div className="input-group"><label>Modelo</label><input value={editForm.modelo} onChange={(e) => setEditForm({ ...editForm, modelo: e.target.value })} /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setMotoEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Motocicletas;