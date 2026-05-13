import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { logoutUniversal } from './auth';
import { getHomeRouteByRole, normalizeRole } from './navigation';
import { repairText } from './textNormalization';
import AdminMenu from './AdminMenu';

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
    <div className="app-container">
      <div className="top-panel">
        <div className="page-title">
          <h2>Inicio Operativo</h2>
          <div className="page-subtitle">{repairText(usuarioLocal?.nombre)} ({repairText(usuarioLocal?.rol)})</div>
        </div>
        <div className="user-actions">
          <button onClick={() => navigate('/perfil')} className="btn-primary">Mi Perfil</button>
          {usuarioLocal?.rol === 'Administrador' && (
            <button onClick={() => navigate('/asignar-privilegios')} className="btn-primary">Asignar Privilegios</button>
          )}
          <button onClick={cerrarSesion} className="btn-secondary">Cerrar Sesión</button>
        </div>
      </div>

      <AdminMenu />

      <div className="portal-grid">
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

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Gestión de Proveedores</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Administra proveedores y sus datos de contacto.</p>
            <button onClick={() => navigate('/proveedores')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Proveedores</button>
          </div>
        )}

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Gestión de Productos</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Registra y actualiza repuestos e inventario.</p>
            <button onClick={() => navigate('/productos')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Productos</button>
          </div>
        )}

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Compras</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Registra compras a proveedores y actualiza stock automáticamente.</p>
            <button onClick={() => navigate('/compras')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Compras</button>
          </div>
        )}

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Cotizaciones</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Crea y administra cotizaciones para clientes y motocicletas.</p>
            <button onClick={() => navigate('/cotizaciones')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Cotizaciones</button>
          </div>
        )}

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Órdenes de Trabajo</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Genera y consulta órdenes de trabajo para el taller.</p>
            <button onClick={() => navigate('/ordenes-trabajo')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Órdenes</button>
          </div>
        )}

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Notas de Trabajo</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Registra notas y observaciones técnicas por orden.</p>
            <button onClick={() => navigate('/notas-trabajo')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Notas</button>
          </div>
        )}

        {esRecepcionista && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Inventario</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Observa los niveles de stock actuales y artículos en alerta.</p>
            <button onClick={() => navigate('/inventario')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Inventario</button>
          </div>
        )}

        {esMecanico && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Gestión de Órdenes</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Consulta las órdenes de trabajo asignadas y su estado.</p>
            <button onClick={() => navigate('/ordenes-trabajo')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Órdenes</button>
          </div>
        )}

        {esMecanico && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Notas de Trabajo</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Registra notas técnicas por cada orden de trabajo.</p>
            <button onClick={() => navigate('/notas-trabajo')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Notas</button>
          </div>
        )}

        {esMecanico && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Inventario</h3>
            <p style={{ color: '#bbb', minHeight: '44px' }}>Revisa el stock actual de repuestos y partes.</p>
            <button onClick={() => navigate('/inventario')} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ir a Inventario</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InicioOperativo;
