import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { PASSWORD_POLICY_MESSAGE, validateStrongPassword } from './passwordPolicy';

const ResetPassword = () => {
  const navigate = useNavigate();
  const token = useMemo(() => new URLSearchParams(window.location.search).get('token') || '', []);
  const [passwordNueva, setPasswordNueva] = useState('');
  const [passwordConfirmacion, setPasswordConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const restablecer = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    if (!token) {
      setError('Token de recuperación no encontrado en la URL.');
      return;
    }

    const passwordError = validateStrongPassword(passwordNueva);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (passwordNueva !== passwordConfirmacion) {
      setError('La confirmación de contraseña no coincide.');
      return;
    }

    setCargando(true);
    try {
      const res = await fetch('http://localhost:8000/api/password/reset/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          password_nueva: passwordNueva,
          password_confirmacion: passwordConfirmacion,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'No se pudo restablecer contraseña.');
        return;
      }

      setMensaje('Contraseña restablecida. Ahora puedes iniciar sesión.');
    } catch {
      setError('Error de conexión con el servidor.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Nueva Contraseña</h2>
        <p>Define una nueva contraseña para tu cuenta.</p>
        <p style={{ marginTop: '-8px', marginBottom: '16px', fontSize: '0.9rem', opacity: 0.9 }}>{PASSWORD_POLICY_MESSAGE}</p>

        {error && <div className="error-box">{error}</div>}
        {mensaje && <div style={{ marginBottom: '20px', backgroundColor: 'rgba(0,255,0,0.15)', color: '#7dff7d', padding: '10px 12px', borderRadius: '6px' }}>{mensaje}</div>}

        <form onSubmit={restablecer}>
          <div className="input-group">
            <label>Nueva contraseña</label>
            <input type="password" value={passwordNueva} onChange={(e) => setPasswordNueva(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Confirmar nueva contraseña</label>
            <input type="password" value={passwordConfirmacion} onChange={(e) => setPasswordConfirmacion(e.target.value)} required />
          </div>

          <button type="submit" className="btn-login" disabled={cargando}>
            {cargando ? 'Procesando...' : 'Restablecer contraseña'}
          </button>

          <button type="button" className="btn-link" onClick={() => navigate('/login')} style={{ marginTop: '12px' }}>
            Volver al inicio de sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
