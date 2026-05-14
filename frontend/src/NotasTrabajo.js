import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { API_BASE_URL } from './config';
import { validarPermisoModulo } from './permissions';

const API = `${API_BASE_URL}/api`;

const NotasTrabajo = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [ordenes, setOrdenes] = useState([]);
  const [notas, setNotas] = useState([]);
  const [error, setError] = useState('');
  const [nuevo, setNuevo] = useState({
    id_orden_trabajo: '',
    fecha_hora: '',
    contenido: '',
    tipo_nota: '',
  });
  const [notaEdicion, setNotaEdicion] = useState(null);
  const [editNota, setEditNota] = useState({
    id_orden_trabajo: '',
    fecha_hora: '',
    contenido: '',
    tipo_nota: '',
  });

  const SeleccionarOrdenTrabajoAsignada = (ordenId) => {
    setNuevo({ ...nuevo, id_orden_trabajo: Number(ordenId) });
  };

  const RedactaNota = (tipo, contenido) => {
    setNuevo({ ...nuevo, tipo_nota: tipo, contenido });
  };

  const SolicitaGuardarNota = async (e) => {
    await crearNota(e);
  };

  const RecibeConfirmacionVisual = (mensaje) => mensaje;

  const abrirEdicionNota = (nota) => {
    setNotaEdicion(nota);
    setEditNota({
      id_orden_trabajo: nota.id_orden_trabajo || '',
      fecha_hora: nota.fecha_hora || '',
      contenido: nota.contenido || '',
      tipo_nota: nota.tipo_nota || '',
    });
  };

  const guardarEdicionNota = async (e) => {
    e.preventDefault();
    if (!notaEdicion) return;
    setError('');
    const payload = {
      id_orden_trabajo: Number(editNota.id_orden_trabajo),
      fecha_hora: editNota.fecha_hora,
      contenido: editNota.contenido,
      tipo_nota: editNota.tipo_nota,
    };
    const res = await fetch(`${API}/notas-trabajo/${notaEdicion.codigo}/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || JSON.stringify(data.errores || {}));
      return;
    }
    setNotaEdicion(null);
    await cargarNotas();
  };

  const eliminarNota = async (nota) => {
    if (!window.confirm(`¿Eliminar nota #${nota.codigo}?`)) return;
    setError('');
    const res = await fetch(`${API}/notas-trabajo/${nota.codigo}/`, {
      method: 'DELETE',
      headers: headers(),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'No se pudo eliminar la nota.');
    await cargarNotas();
  };

  const ordenesOrdenadas = useMemo(
    () => [...ordenes].sort((a, b) => Number(a.codigo) - Number(b.codigo)),
    [ordenes]
  );

  const notasOrdenadas = useMemo(
    () => [...notas].sort((a, b) => Number(a.codigo) - Number(b.codigo)),
    [notas]
  );

  const headers = () => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` });

  useEffect(() => {
    if (!usuarioLocal) {
      navigate('/login');
      return;
    }

    const validarAcceso = async () => {
      const permitido = await validarPermisoModulo(
        'CU09',
        ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
        usuarioLocal?.rol
      );
      if (!permitido) {
        alert('Acceso denegado para notas de trabajo.');
        navigate(getHomeRouteByRole(usuarioLocal?.rol));
        return;
      }

      cargarOrdenes();
      cargarNotas();
    };

    validarAcceso();
  }, [navigate, usuarioLocal]);

  const cargarOrdenes = async () => {
    const res = await fetch(`${API}/ordenes-trabajo/`, { headers: headers() });
    const data = await res.json();
    if (res.ok) setOrdenes(Array.isArray(data) ? data : []);
  };

  const cargarNotas = async () => {
    try {
      setError('');
      const res = await fetch(`${API}/notas-trabajo/`, { headers: headers() });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar notas.');
      setNotas(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexión cargando notas de trabajo.');
    }
  };

  const crearNota = async (e) => {
    e.preventDefault();
    setError('');
    const res = await fetch(`${API}/notas-trabajo/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(nuevo),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));
    setNuevo({ id_orden_trabajo: '', fecha_hora: '', contenido: '', tipo_nota: '' });
    await cargarNotas();
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Notas de Trabajo (CU09)</h2>
        <div>
          <button onClick={() => navigate('/inicio')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Registrar nota de trabajo</h3>
          <form onSubmit={crearNota}>
            <div className="input-group"><label>Orden de trabajo</label><select value={nuevo.id_orden_trabajo} onChange={(e) => setNuevo({ ...nuevo, id_orden_trabajo: Number(e.target.value) })} required><option value="">Seleccione</option>{ordenesOrdenadas.map((o) => (<option key={o.codigo} value={o.codigo}>{`#${o.codigo} - ${o.cliente_nombre || ''}`}</option>))}</select></div>
            <div className="input-group"><label>Fecha y hora</label><input type="datetime-local" value={nuevo.fecha_hora} onChange={(e) => setNuevo({ ...nuevo, fecha_hora: e.target.value })} required /></div>
            <div className="input-group"><label>Tipo de nota</label><input value={nuevo.tipo_nota} onChange={(e) => setNuevo({ ...nuevo, tipo_nota: e.target.value })} /></div>
            <div className="input-group"><label>Contenido</label><textarea value={nuevo.contenido} onChange={(e) => setNuevo({ ...nuevo, contenido: e.target.value })} rows="5" required /></div>
            <button type="submit" className="btn-login">Crear nota</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Listado de notas</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Código</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Orden</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Mecánico</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Tipo</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Contenido</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Fecha</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {notasOrdenadas.map((n) => (
                <tr key={n.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                  <td style={{ padding: '8px' }}>#{n.codigo}</td>
                  <td style={{ padding: '8px' }}>{n.orden_numero || '-'}</td>
                  <td style={{ padding: '8px' }}>{n.mecanico_nombre || '-'}</td>
                  <td style={{ padding: '8px' }}>{n.tipo_nota || '-'}</td>
                  <td style={{ padding: '8px' }}>{n.contenido || '-'}</td>
                  <td style={{ padding: '8px' }}>{n.fecha_hora || '-'}</td>
                  <td style={{ padding: '8px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <button onClick={() => abrirEdicionNota(n)} style={{ backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Editar</button>
                    <button onClick={() => eliminarNota(n)} style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {notaEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '520px', maxHeight: '80vh', overflowY: 'auto', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar nota #{notaEdicion.codigo}</h3>
            <form onSubmit={guardarEdicionNota}>
              <div className="input-group"><label>Orden de trabajo</label><select value={editNota.id_orden_trabajo} onChange={(e) => setEditNota({ ...editNota, id_orden_trabajo: Number(e.target.value) })} required><option value="">Seleccione</option>{ordenesOrdenadas.map((o) => (<option key={o.codigo} value={o.codigo}>{`#${o.codigo} - ${o.cliente_nombre || ''}`}</option>))}</select></div>
              <div className="input-group"><label>Fecha y hora</label><input type="datetime-local" value={editNota.fecha_hora} onChange={(e) => setEditNota({ ...editNota, fecha_hora: e.target.value })} required /></div>
              <div className="input-group"><label>Tipo de nota</label><input value={editNota.tipo_nota} onChange={(e) => setEditNota({ ...editNota, tipo_nota: e.target.value })} /></div>
              <div className="input-group"><label>Contenido</label><textarea value={editNota.contenido} onChange={(e) => setEditNota({ ...editNota, contenido: e.target.value })} rows="5" required /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setNotaEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotasTrabajo;