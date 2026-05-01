import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { logoutUniversal } from './auth';

const API = 'http://localhost:8000/api';

const MisMotocicletas = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [cliente, setCliente] = useState(null);
  const [motos, setMotos] = useState([]);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(true);

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    if (!usuarioLocal || usuarioLocal.rol !== 'Cliente') {
      navigate('/login');
      return;
    }

    cargarMisMotocicletas();
  }, [navigate, usuarioLocal]);

  const cargarMisMotocicletas = async () => {
    try {
      setCargando(true);
      setError('');
      const res = await fetch(`${API}/mis-motocicletas/`, { headers: headers(false) });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'No se pudieron cargar tus motocicletas.');
        setMotos([]);
        setCliente(null);
        return;
      }

      setCliente(data.cliente || null);
      setMotos(Array.isArray(data.motocicletas) ? data.motocicletas : []);
      if (data.mensaje) {
        setError(data.mensaje);
      }
    } catch {
      setError('Error de conexión cargando motocicletas.');
    } finally {
      setCargando(false);
    }
  };

  const cerrarSesion = async () => {
    await logoutUniversal();
    navigate('/login');
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ color: '#ff6600', margin: 0 }}>Mis Motocicletas</h2>
          <p style={{ margin: '6px 0 0', color: '#bbb' }}>{usuarioLocal?.nombre}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
          <button onClick={cerrarSesion} style={{ padding: '8px 16px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cerrar Sesión</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>
        <h3 style={{ marginTop: 0, color: '#ccc' }}>Motocicletas asociadas</h3>
        {cliente && (
          <div style={{ marginBottom: '14px', color: '#bbb' }}>
            Cliente vinculado: <strong style={{ color: '#ff6600' }}>{cliente.nombre}</strong>
          </div>
        )}

        {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

        {cargando ? (
          <div style={{ color: '#bbb' }}>Cargando motocicletas...</div>
        ) : motos.length === 0 ? (
          <div style={{ color: '#bbb' }}>No tienes motocicletas asociadas todavía.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ff6600', color: '#ccc' }}>
                <th style={{ padding: '12px' }}>Placa</th>
                <th style={{ padding: '12px' }}>Marca</th>
                <th style={{ padding: '12px' }}>Modelo</th>
                <th style={{ padding: '12px' }}>Año</th>
                <th style={{ padding: '12px' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {motos.map((moto) => (
                <tr key={moto.codigo} style={{ borderBottom: '1px solid #333', opacity: (moto.estado || 'Activo') === 'Inactivo' ? 0.6 : 1 }}>
                  <td style={{ padding: '12px' }}>{moto.placa}</td>
                  <td style={{ padding: '12px' }}>{moto.marca || '-'}</td>
                  <td style={{ padding: '12px' }}>{moto.modelo || '-'}</td>
                  <td style={{ padding: '12px' }}>{moto.anio || '-'}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ backgroundColor: (moto.estado || 'Activo') === 'Activo' ? 'rgba(0,255,0,0.12)' : 'rgba(255,0,0,0.12)', color: (moto.estado || 'Activo') === 'Activo' ? '#7dff7d' : '#ff8f8f', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                      {moto.estado || 'Activo'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MisMotocicletas;