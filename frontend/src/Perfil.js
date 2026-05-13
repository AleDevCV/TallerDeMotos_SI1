import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { PASSWORD_POLICY_MESSAGE, validateStrongPassword } from './passwordPolicy';
import { API_BASE_URL } from './config';

const API = `${API_BASE_URL}/api`;

const Perfil = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');
  const [perfil, setPerfil] = useState({ nombre: '', email: '', telefono: '', rol_nombre: '' });
  const [permisosPerfil, setPermisosPerfil] = useState([]);
  const [permisosCargando, setPermisosCargando] = useState(false);
  const [passwords, setPasswords] = useState({ password_actual: '', password_nueva: '', password_confirmacion: '' });

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  const cargarPermisosPerfil = async (rolNombre) => {
    setPermisosCargando(true);
    try {
      const res = await fetch(`${API}/permisos/`, { headers: headers(false) });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'No se pudo cargar los permisos del perfil.');
        return;
      }

      const filtrados = data.filter(
        (permiso) => permiso.rol_nombre === rolNombre && permiso.permitido
      );
      setPermisosPerfil(filtrados);
    } catch (err) {
      console.error('Error cargando permisos del perfil:', err);
      setError('No se pudo cargar los permisos del perfil.');
    } finally {
      setPermisosCargando(false);
    }
  };

  useEffect(() => {
    if (!usuarioLocal) {
      navigate('/login');
      return;
    }
    cargarPerfil();
  }, [navigate, usuarioLocal]);

  const cargarPerfil = async () => {
    setError('');
    const res = await fetch(`${API}/perfil/`, { headers: headers(false) });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'No se pudo cargar perfil.');
    setPerfil(data);
    if (data.rol_nombre) {
      cargarPermisosPerfil(data.rol_nombre);
    }
  };

  const guardarPerfil = async (e) => {
    e.preventDefault();
    setError('');
    setOk('');
    const res = await fetch(`${API}/perfil/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify({ nombre: perfil.nombre, telefono: perfil.telefono }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));

    const usuarioLs = JSON.parse(localStorage.getItem('usuario'));
    localStorage.setItem('usuario', JSON.stringify({ ...usuarioLs, nombre: perfil.nombre }));
    setOk('Perfil actualizado correctamente.');
  };

  const cambiarPassword = async (e) => {
    e.preventDefault();
    setError('');
    setOk('');

    const passwordError = validateStrongPassword(passwords.password_nueva);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (passwords.password_nueva !== passwords.password_confirmacion) {
      setError('La confirmación de contraseña no coincide.');
      return;
    }

    const res = await fetch(`${API}/perfil/`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify(passwords),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'No se pudo actualizar contraseña.');

    setPasswords({ password_actual: '', password_nueva: '', password_confirmacion: '' });
    setOk('Contraseña actualizada correctamente.');
  };

  const volver = () => {
    navigate(getHomeRouteByRole(usuarioLocal?.rol));
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Mi Perfil (CU17)</h2>
        <button onClick={volver} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Volver</button>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}
      {ok && <div style={{ marginBottom: '15px', backgroundColor: 'rgba(0,255,0,0.15)', color: '#7dff7d', padding: '10px 12px', borderRadius: '6px' }}>{ok}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Datos personales</h3>
          <form onSubmit={guardarPerfil}>
            <div className="input-group"><label>Nombre</label><input value={perfil.nombre || ''} onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })} required /></div>
            <div className="input-group"><label>Email</label><input value={perfil.email || ''} readOnly /></div>
            <div className="input-group"><label>Teléfono</label><input value={perfil.telefono || ''} onChange={(e) => setPerfil({ ...perfil, telefono: e.target.value })} /></div>
            <div className="input-group"><label>Rol</label><input value={perfil.rol_nombre || ''} readOnly /></div>
            <button type="submit" className="btn-login">Guardar perfil</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Cambiar contraseña</h3>
          <p style={{ marginTop: '-4px', marginBottom: '14px', opacity: 0.9 }}>{PASSWORD_POLICY_MESSAGE}</p>
          <form onSubmit={cambiarPassword}>
            <div className="input-group"><label>Contraseña actual</label><input type="password" value={passwords.password_actual} onChange={(e) => setPasswords({ ...passwords, password_actual: e.target.value })} required /></div>
            <div className="input-group"><label>Nueva contraseña</label><input type="password" value={passwords.password_nueva} onChange={(e) => setPasswords({ ...passwords, password_nueva: e.target.value })} required /></div>
            <div className="input-group"><label>Confirmar nueva contraseña</label><input type="password" value={passwords.password_confirmacion} onChange={(e) => setPasswords({ ...passwords, password_confirmacion: e.target.value })} required /></div>
            <button type="submit" className="btn-login">Actualizar contraseña</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Accesos asignados</h3>
          {permisosCargando ? (
            <p>Cargando permisos...</p>
          ) : permisosPerfil.length === 0 ? (
            <p>No hay permisos asignados para este rol.</p>
          ) : (
            <div style={{ maxHeight: '320px', overflowY: 'auto' }}>
              {Object.values(
                permisosPerfil.reduce((acc, permiso) => {
                  const key = `${permiso.codigo_cu}_${permiso.nombre_modulo}`;
                  if (!acc[key]) {
                    acc[key] = {
                      codigo_cu: permiso.codigo_cu,
                      nombre_modulo: permiso.nombre_modulo,
                      acciones: [],
                    };
                  }
                  acc[key].acciones.push(permiso.accion);
                  return acc;
                }, {})
              ).map((permiso) => (
                <div key={`${permiso.codigo_cu}_${permiso.nombre_modulo}`} style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#ff6600' }}>{permiso.codigo_cu} – {permiso.nombre_modulo}</strong>
                  <div style={{ marginTop: '6px', color: '#ccc' }}>{permiso.acciones.join(', ')}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;