import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const ForgotPasswordRequest = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const enviarSolicitud = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');
    setCargando(true);

    try {
      const res = await fetch('http://localhost:8000/api/password/forgot/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'No se pudo procesar la solicitud.');
        return;
      }

      setMensaje(data.mensaje || 'Si la cuenta existe, se enviará un enlace de recuperación.');
    } catch {
      setError('Error de conexión con el servidor.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Recuperar Contraseña</h2>
        <p>Ingresa tu correo para recibir un enlace de recuperación.</p>

        {error && <div className="error-box">{error}</div>}
        {mensaje && <div style={{ marginBottom: '20px', backgroundColor: 'rgba(0,255,0,0.15)', color: '#7dff7d', padding: '10px 12px', borderRadius: '6px' }}>{mensaje}</div>}

        <form onSubmit={enviarSolicitud}>
          <div className="input-group">
            <label>Correo</label>
            <input
              type="text"
              placeholder="ejemplo@laroca.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login" disabled={cargando}>
            {cargando ? 'Enviando...' : 'Enviar enlace'}
          </button>

          <button type="button" className="btn-link" onClick={() => navigate('/login')} style={{ marginTop: '12px' }}>
            Volver al inicio de sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordRequest;
