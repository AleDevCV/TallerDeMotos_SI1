import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MENU_GROUPS = [
  {
    key: 'P1',
    label: 'P1',
    items: [
      { label: 'CU01 – Iniciar/Cerrar Sesión', path: '/login' },
      { label: 'CU02 – Administrar Usuarios', path: '/usuarios' },
      { label: 'CU03 – Configurar Roles', path: '/roles-permisos' },
      { label: 'CU04 – Gestionar Permisos', path: '/roles-permisos' },
    ],
  },
  {
    key: 'P2',
    label: 'P2',
    items: [
      { label: 'CU05 – Gestionar Clientes', path: '/clientes' },
      { label: 'CU06 – Gestionar Motocicletas', path: '/motocicletas' },
      { label: 'CU15 – Historial de Mantenimiento', path: '/historial-mantenimiento' },
      { label: 'CU16 – Gestionar Seguimiento para Clientes', path: '/seguimiento-clientes' },
    ],
  },
  {
    key: 'P3',
    label: 'P3',
    items: [
      { label: 'CU07 – Elaborar Cotización', path: '/cotizaciones' },
      { label: 'CU08 – Gestionar Órdenes de Trabajo', path: '/ordenes-trabajo' },
      { label: 'CU09 – Redactar Notas de Trabajo', path: '/notas-trabajo' },
      { label: 'CU14 – Emitir Facturación', path: '/facturacion' },
    ],
  },
  {
    key: 'P4',
    label: 'P4',
    items: [
      { label: 'CU12 – Procesar Compras a Proveedores', path: '/compras' },
      { label: 'CU10 – Gestionar Productos (Repuestos)', path: '/productos' },
      { label: 'CU11 – Monitorear Inventario', path: '/inventario' },
      { label: 'CU13 – Administrar Proveedores', path: '/proveedores' },
    ],
  },
  {
    key: 'P5',
    label: 'P5',
    items: [
      { label: 'CU17 – Configuración de Perfil Personal', path: '/perfil' },
      { label: 'CU18 – Generar Reportes', path: '/reportes' },
      { label: 'CU19 – Visualizar Dashboard Analítico', path: '/dashboard-analitico' },
      { label: 'CU20 – Bitácora de Auditoría', path: '/bitacora' },
    ],
  },
];

const AdminMenu = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('');

  const openMenu = (key) => setActive(key);
  const closeMenu = () => setActive('');

  const toggleMenu = (key) => {
    setActive((current) => (current === key ? '' : key));
  };

  return (
    <div className="admin-menu-bar" onMouseLeave={closeMenu}>
      {MENU_GROUPS.map((group) => (
        <div key={group.key} className="admin-menu-group">
          <button
            type="button"
            onClick={() => toggleMenu(group.key)}
            onMouseEnter={() => openMenu(group.key)}
            className="admin-menu-button"
          >
            {group.label}
          </button>
          {active === group.key && group.items.length > 0 && (
            <div className="admin-menu-dropdown">
              {group.items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="admin-menu-item"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminMenu;
