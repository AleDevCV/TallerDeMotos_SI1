import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { logoutUniversal } from './auth';
import { getHomeRouteByRole, normalizeRole } from './navigation';
import { repairText } from './textNormalization';
import AdminMenu from './AdminMenu';
import { fetchPermisosUsuario, tienePermisoCu } from './permissions';

const InicioOperativo = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [permisos, setPermisos] = useState([]);
  const [permisosCargando, setPermisosCargando] = useState(true);

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

  useEffect(() => {
    let activo = true;
    if (!usuarioLocal) {
      setPermisos([]);
      setPermisosCargando(false);
      return () => {
        activo = false;
      };
    }

    const cargarPermisos = async () => {
      const data = await fetchPermisosUsuario();
      if (activo) {
        setPermisos(data);
        setPermisosCargando(false);
      }
    };

    cargarPermisos();
    return () => {
      activo = false;
    };
  }, [usuarioLocal]);

  const cerrarSesion = async () => {
    await logoutUniversal();
    navigate('/login');
  };

  const rolNormalizado = normalizeRole(usuarioLocal?.rol);
  const esRecepcionista = rolNormalizado === 'recepcionista';
  const esMecanico = rolNormalizado === 'mecanico';

  const puedeVerCu = (codigoCu) => tienePermisoCu(permisos, codigoCu, usuarioLocal?.rol);

  const cardsRecepcionista = [
    {
      cu: 'CU05',
      titulo: 'Gestión de Clientes',
      descripcion: 'Registra, edita y desactiva clientes del taller.',
      path: '/clientes',
    },
    {
      cu: 'CU06',
      titulo: 'Gestión de Motocicletas',
      descripcion: 'Consulta y administra motocicletas asociadas a clientes.',
      path: '/motocicletas',
    },
    {
      cu: 'CU13',
      titulo: 'Gestión de Proveedores',
      descripcion: 'Administra proveedores y sus datos de contacto.',
      path: '/proveedores',
    },
    {
      cu: 'CU10',
      titulo: 'Gestión de Productos',
      descripcion: 'Registra y actualiza repuestos e inventario.',
      path: '/productos',
    },
    {
      cu: 'CU12',
      titulo: 'Compras',
      descripcion: 'Registra compras a proveedores y actualiza stock automáticamente.',
      path: '/compras',
    },
    {
      cu: 'CU07',
      titulo: 'Cotizaciones',
      descripcion: 'Crea y administra cotizaciones para clientes y motocicletas.',
      path: '/cotizaciones',
    },
    {
      cu: 'CU08',
      titulo: 'Órdenes de Trabajo',
      descripcion: 'Genera y consulta órdenes de trabajo para el taller.',
      path: '/ordenes-trabajo',
    },
    {
      cu: 'CU09',
      titulo: 'Notas de Trabajo',
      descripcion: 'Registra notas y observaciones técnicas por orden.',
      path: '/notas-trabajo',
    },
    {
      cu: 'CU11',
      titulo: 'Inventario',
      descripcion: 'Observa los niveles de stock actuales y artículos en alerta.',
      path: '/inventario',
    },
  ];

  const cardsMecanico = [
    {
      cu: 'CU08',
      titulo: 'Gestión de Órdenes',
      descripcion: 'Consulta las órdenes de trabajo asignadas y su estado.',
      path: '/ordenes-trabajo',
    },
    {
      cu: 'CU09',
      titulo: 'Notas de Trabajo',
      descripcion: 'Registra notas técnicas por cada orden de trabajo.',
      path: '/notas-trabajo',
    },
    {
      cu: 'CU11',
      titulo: 'Inventario',
      descripcion: 'Revisa el stock actual de repuestos y partes.',
      path: '/inventario',
    },
  ];

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
        {permisosCargando && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c', color: '#bbb' }}>
            Cargando permisos...
          </div>
        )}

        {esRecepcionista && !permisosCargando && (
          cardsRecepcionista
            .filter((card) => puedeVerCu(card.cu))
            .map((card) => (
              <div key={card.cu} style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
                <h3 style={{ marginTop: 0, color: '#ff6600' }}>{card.titulo}</h3>
                <p style={{ color: '#bbb', minHeight: '44px' }}>{card.descripcion}</p>
                <button onClick={() => navigate(card.path)} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Ir a {card.titulo}
                </button>
              </div>
            ))
        )}

        {esMecanico && !permisosCargando && (
          cardsMecanico
            .filter((card) => puedeVerCu(card.cu))
            .map((card) => (
              <div key={card.cu} style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c' }}>
                <h3 style={{ marginTop: 0, color: '#ff6600' }}>{card.titulo}</h3>
                <p style={{ color: '#bbb', minHeight: '44px' }}>{card.descripcion}</p>
                <button onClick={() => navigate(card.path)} style={{ padding: '8px 14px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Ir a {card.titulo}
                </button>
              </div>
            ))
        )}

        {!permisosCargando && ((esRecepcionista && cardsRecepcionista.filter((card) => puedeVerCu(card.cu)).length === 0) || (esMecanico && cardsMecanico.filter((card) => puedeVerCu(card.cu)).length === 0)) && (
          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '18px', border: '1px solid #2c2c2c', color: '#bbb' }}>
            No hay módulos habilitados para este rol.
          </div>
        )}
      </div>
    </div>
  );
};

export default InicioOperativo;
