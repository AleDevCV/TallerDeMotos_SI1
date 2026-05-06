import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { PASSWORD_POLICY_MESSAGE, validateStrongPassword } from './passwordPolicy';

const ForceChangePassword = () => {
  const navigate = useNavigate();
  const [passwordNueva, setPasswordNueva] = useState('');
  const [passwordConfirmacion, setPasswordConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const cambiar = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    const passwordError = validateStrongPassword(passwordNueva);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (passwordNueva !== passwordConfirmacion) {
      setError('La confirmación de contraseña no coincide.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Sesión no válida. Inicia sesión nuevamente.');
      return;
    }

    setCargando(true);
    try {
      const res = await fetch('https://tallermotoslaroca.azurewebsites.net/api/password/force-change/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password_nueva: passwordNueva,
          password_confirmacion: passwordConfirmacion,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'No se pudo cambiar la contraseña.');
        return;
      }

      localStorage.setItem('requires_password_change', '0');
      setMensaje('Contraseña actualizada correctamente. Redirigiendo...');
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      setTimeout(() => navigate(getHomeRouteByRole(usuario?.rol)), 1200);
    } catch {
      setError('Error de conexión con el servidor.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Cambio Obligatorio</h2>
        <p>Debes cambiar tu contraseña temporal antes de continuar.</p>
        <p style={{ marginTop: '-8px', marginBottom: '16px', fontSize: '0.9rem', opacity: 0.9 }}>{PASSWORD_POLICY_MESSAGE}</p>

        {error && <div className="error-box">{error}</div>}
        {mensaje && <div style={{ marginBottom: '20px', backgroundColor: 'rgba(0,255,0,0.15)', color: '#7dff7d', padding: '10px 12px', borderRadius: '6px' }}>{mensaje}</div>}

        <form onSubmit={cambiar}>
          <div className="input-group">
            <label>Nueva contraseña</label>
            <input type="password" value={passwordNueva} onChange={(e) => setPasswordNueva(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Confirmar nueva contraseña</label>
            <input type="password" value={passwordConfirmacion} onChange={(e) => setPasswordConfirmacion(e.target.value)} required />
          </div>

          <button type="submit" className="btn-login" disabled={cargando}>
            {cargando ? 'Procesando...' : 'Actualizar contraseña'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForceChangePassword;
