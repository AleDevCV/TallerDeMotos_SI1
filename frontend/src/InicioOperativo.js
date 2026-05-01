import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { logoutUniversal } from './auth';
import { getHomeRouteByRole, normalizeRole } from './navigation';
import { repairText } from './textNormalization';

const InicioOperativo = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);

  useEffect(() => {
    if (!usuarioLocal) {
      navigate('/login');
      return;
    }

    const rolNormalizado = normalizeRole(usuarioLocal.rol);
    if (rolNormalizado === 'administrador' || rolNormalizado === 'cliente') {
      navigate(getHomeRouteByRole(usuarioLocal.rol));
    }
  }, [navigate, usuarioLocal]);

  const cerrarSesion = async () => {
    await logoutUniversal();
    navigate('/login');
  };

  const rolNormalizado = normalizeRole(usuarioLocal?.rol);
  const esRecepcionista = rolNormalizado === 'recepcionista';
  const esMecanico = rolNormalizado === 'mecanico';

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ color: '#ff6600', margin: 0 }}>Inicio Operativo</h2>
          <p style={{ margin: '6px 0 0', color: '#bbb' }}>{repairText(usuarioLocal?.nombre)} ({repairText(usuarioLocal?.rol)})</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
          <button onClick={cerrarSesion} style={{ padding: '8px 16px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cerrar Sesión</button>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Gestión de Clientes</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Registra, edita y desactiva clientes del taller.</p>
            <button onClick={() => navigate('/clientes')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Clientes</button>
          </div>
        )}

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Gestión de Motocicletas</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Consulta y administra motocicletas asociadas a clientes.</p>
            <button onClick={() => navigate('/motocicletas')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Motocicletas</button>
          </div>
        )}

        {esMecanico && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Panel Mecánico</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Tu acceso actual está centrado en datos de perfil y autenticación.</p>
            <button onClick={() => navigate('/perfil')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Mi Perfil</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InicioOperativo;
