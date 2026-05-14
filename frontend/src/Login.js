// frontend/src/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { getHomeRouteByRole } from './navigation';
import { repairText } from './textNormalization';
import { API_BASE_URL } from './config';

const Login = () => {
  // Estados para guardar lo que escribe el usuario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estados para manejar errores y la animación de carga
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const resolveHomeRoute = async (usuario) => {
    if (!usuario?.rol) {
      return '/login';
    }
    if (usuario.rol === 'Administrador') {
      return '/bitacora';
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return getHomeRouteByRole(usuario.rol);
      }
      const res = await fetch(`${API_BASE_URL}/api/permisos/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json().catch(() => []);
      if (res.ok && Array.isArray(data)) {
        const tieneBitacora = data.some(
          (permiso) =>
            permiso.codigo_cu === 'CU20'
            && permiso.permitido
            && ['Mostrar', 'Buscar', 'Exportar'].includes(permiso.accion)
        );
        if (tieneBitacora) {
          return '/bitacora';
        }
      }
    } catch {
      // Fallback to role-based route
    }

    return getHomeRouteByRole(usuario.rol);
  };

  // Función que se ejecuta al hacer clic en "Ingresar"
  const manejarSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setError('');
    setCargando(true);

    try {
      // Hacemos la petición POST a nuestro servidor Django (Puerto 8000)
      const respuesta = await fetch(`${API_BASE_URL}/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok && datos.exito) {
        // ¡ÉXITO! Guardamos el Token y los datos del usuario en la memoria del navegador
        localStorage.setItem('token', datos.token);
        localStorage.setItem('usuario', JSON.stringify(datos.usuario));
        localStorage.setItem('requires_password_change', datos.requires_password_change ? '1' : '0');
        
        if (datos.requires_password_change) {
          navigate('/cambiar-password-obligatorio');
        } else {
          const homeRoute = await resolveHomeRoute(datos.usuario);
          navigate(homeRoute);
        }
        
        // Más adelante, aquí pondremos el código para llevarlo a la pantalla de Inicio/Bitácora
      } else {
        // Mostrar el error que nos mandó Django (ej: Contraseña incorrecta)
        setError(repairText(datos.error || 'Error al iniciar sesion'));
      }
    } catch (err) {
      setError('Error de conexión con el servidor. ¿Está encendido Docker?');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Taller La Roca</h2>
        <p>Portal de Gestión y Seguimiento</p>

        {/* Si hay un error, mostramos la caja roja */}
        {error && <div className="error-box">{error}</div>}

        <form onSubmit={manejarSubmit}>
          <div className="input-group">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="ejemplo@laroca.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-login" disabled={cargando}>
            {cargando ? 'Verificando...' : 'Ingresar al Sistema'}
          </button>

          <button
            type="button"
            className="btn-link"
            onClick={() => navigate('/forgot-password')}
            style={{ marginTop: '12px' }}
          >
            ¿Olvidaste tu contraseña?
          </button>

          <button
            type="button"
            className="btn-link"
            onClick={() => navigate('/')}
            style={{ marginTop: '8px' }}
          >
            Volver a Inicio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;