import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { logoutUniversal } from './auth';
import { repairText } from './textNormalization';
import AdminMenu from './AdminMenu';
import { API_BASE_URL } from './config';

const ROLES = ['Cliente', 'Mecanico', 'Recepcionista', 'Administrador'];
const ADMIN_ROLE = 'Administrador';

const PERMISOS_DATA = [
  {
    seccion: 'P1',
    nombre: 'Gestión de Usuarios y Accesos',
    modulos: [
      {
        cu: 'CU01',
        nombre: 'Gestionar Inicio y Cierre de Sesión',
        acciones: ['Mostrar', 'Buscar', 'Eliminar'],
      },
      {
        cu: 'CU02',
        nombre: 'Gestion de Usuarios',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU03|CU04',
        nombre: 'Gestionar Roles y Asignar Permisos',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU17',
        nombre: 'Configuración de Perfil Personal',
        acciones: ['Mostrar', 'Editar'],
      },
      {
        cu: 'CU20',
        nombre: 'Bitácora de Auditoría',
        acciones: ['Mostrar', 'Buscar', 'Exportar'],
      },
    ],
  },
  {
    seccion: 'P2',
    nombre: 'Gestión de Clientes y Motocicletas',
    modulos: [
      {
        cu: 'CU05',
        nombre: 'Gestion de Clientes',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU06',
        nombre: 'Gestion de Motocicletas',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU15',
        nombre: 'Gestionar Historial de Mantenimiento',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar'],
      },
    ],
  },
  {
    seccion: 'P3',
    nombre: 'Gestión de Cotizaciones y Órdenes de Trabajo',
    modulos: [
      {
        cu: 'CU07',
        nombre: 'Gestionar Cotizaciones',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU08',
        nombre: 'Gestionar Órdenes de Trabajo',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU09',
        nombre: 'Gestionar Notas de Trabajo',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU16',
        nombre: 'Gestionar Seguimiento para Clientes',
        acciones: ['Mostrar', 'Buscar', 'Exportar'],
      },
    ],
  },
  {
    seccion: 'P4',
    nombre: 'Gestión de Inventario y Repuestos',
    modulos: [
      {
        cu: 'CU12',
        nombre: 'Gestionar Compras a Proveedores',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU10',
        nombre: 'Gestionar Productos (Repuestos)',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
      {
        cu: 'CU11',
        nombre: 'Gestionar Inventario',
        acciones: ['Mostrar', 'Buscar', 'Reportes'],
      },
      {
        cu: 'CU13',
        nombre: 'Gestionar Proveedores',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
      },
    ],
  },
  {
    seccion: 'P5',
    nombre: 'Gestión de Facturación y Pagos',
    modulos: [
      {
        cu: 'CU14',
        nombre: 'Gestionar Facturación',
        acciones: ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar', 'Imprimir'],
      },
    ],
  },
  {
    seccion: 'P6',
    nombre: 'Gestión de Reportes y Análisis',
    modulos: [
      {
        cu: 'CU18',
        nombre: 'Gestionar Reportes',
        acciones: ['Mostrar', 'Buscar', 'Exportar', 'Descargar'],
      },
      {
        cu: 'CU19',
        nombre: 'Gestionar Dashboard Analítico',
        acciones: ['Mostrar', 'Exportar'],
      },
    ],
  },
];

const AsignarPrivilegios = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [permisos, setPermisos] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    if (!usuarioLocal || usuarioLocal.rol !== 'Administrador') {
      navigate('/login');
      return;
    }
    cargarPermisos();
  }, [navigate, usuarioLocal]);

  const cargarPermisos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/permisos/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setPermisos(buildPermissionsFromApiData(data));
      } else {
        initializePermissions();
      }
    } catch (err) {
      console.error('Error cargando permisos:', err);
      initializePermissions();
    } finally {
      setCargando(false);
    }
  };

  const buildPermissionsFromApiData = (rawPermisos) => {
    const permsObj = {};

    ROLES.forEach((rol) => {
      permsObj[rol] = {};
      PERMISOS_DATA.forEach((seccion) => {
        seccion.modulos.forEach((modulo) => {
          const key = `${modulo.cu}_${modulo.nombre}`;
          permsObj[rol][key] = {
            modulo: modulo,
            acciones: {},
          };
          modulo.acciones.forEach((accion) => {
            permsObj[rol][key].acciones[accion] = rol === ADMIN_ROLE;
          });
        });
      });
    });

    rawPermisos.forEach((permiso) => {
      const rolNombre = permiso.rol_nombre;
      const key = `${permiso.codigo_cu}_${permiso.nombre_modulo}`;

      if (!permsObj[rolNombre] || !permsObj[rolNombre][key]) {
        return;
      }

      permsObj[rolNombre][key].acciones[permiso.accion] = permiso.permitido;
    });

    return permsObj;
  };

  const initializePermissions = () => {
    const permsObj = {};
    ROLES.forEach((rol) => {
      permsObj[rol] = {};
      PERMISOS_DATA.forEach((seccion) => {
        seccion.modulos.forEach((modulo) => {
          const key = `${modulo.cu}_${modulo.nombre}`;
          permsObj[rol][key] = {
            modulo: modulo,
            acciones: {},
          };
          modulo.acciones.forEach((accion) => {
            permsObj[rol][key].acciones[accion] = rol === ADMIN_ROLE;
          });
        });
      });
    });
    setPermisos(permsObj);
  };

  const ensureAdminPermissions = (permsObj) => {
    const updated = { ...permsObj };
    if (!updated[ADMIN_ROLE]) {
      updated[ADMIN_ROLE] = {};
    }

    PERMISOS_DATA.forEach((seccion) => {
      seccion.modulos.forEach((modulo) => {
        const key = `${modulo.cu}_${modulo.nombre}`;
        if (!updated[ADMIN_ROLE][key]) {
          updated[ADMIN_ROLE][key] = { modulo, acciones: {} };
        }
        modulo.acciones.forEach((accion) => {
          updated[ADMIN_ROLE][key].acciones[accion] = true;
        });
      });
    });

    return updated;
  };

  const togglePermiso = (rol, cuNombre, accion) => {
    if (rol === ADMIN_ROLE) {
      return;
    }

    setPermisos((prev) => ({
      ...prev,
      [rol]: {
        ...prev[rol],
        [cuNombre]: {
          ...prev[rol][cuNombre],
          acciones: {
            ...prev[rol][cuNombre].acciones,
            [accion]: !prev[rol][cuNombre].acciones[accion],
          },
        },
      },
    }));
  };

  const toggleSelectAllRole = (rol) => {
    if (rol === ADMIN_ROLE) {
      return;
    }

    setPermisos((prev) => {
      const rolePerms = prev[rol] || {};
      const allSelected = Object.values(rolePerms).every((item) =>
        Object.values(item.acciones).every(Boolean)
      );

      const updatedRolePerms = Object.fromEntries(
        Object.entries(rolePerms).map(([cuNombre, item]) => [
          cuNombre,
          {
            ...item,
            acciones: Object.fromEntries(
              Object.entries(item.acciones).map(([accion]) => [accion, !allSelected])
            ),
          },
        ])
      );

      return {
        ...prev,
        [rol]: updatedRolePerms,
      };
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  const guardarPermisos = async () => {
    setGuardando(true);
    try {
      const token = localStorage.getItem('token');
      const permisosAEnviar = ensureAdminPermissions(permisos);
      const response = await fetch(`${API_BASE_URL}/api/permisos/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(permisosAEnviar),
      });
      let resultData = {};
      try {
        resultData = await response.json();
      } catch (jsonError) {
        console.warn('No JSON response from permisos API:', jsonError);
      }

      if (response.ok) {
        alert('Permisos guardados exitosamente');
        setPermisos(permisosAEnviar);
      } else {
        setError(resultData.error || resultData.mensaje || JSON.stringify(resultData) || 'Error al guardar los permisos');
      }
    } catch (err) {
      console.error('Error guardando permisos:', err);
      setError('Error al guardar los permisos');
    } finally {
      setGuardando(false);
    }
  };

  const cerrarSesion = async () => {
    await logoutUniversal();
    navigate('/login');
  };

  if (cargando) {
    return <div className="app-container"><p>Cargando...</p></div>;
  }

  return (
    <div className="app-container">
      <div className="top-panel">
        <div className="page-title">
          <h2>Asignar Privilegios</h2>
          <div className="page-subtitle">El Administrador ve todo y asigna qué puede ver y hacer cada rol.</div>
        </div>
        <div className="user-actions">
          <span>👤 {repairText(usuarioLocal?.nombre)} ({repairText(usuarioLocal?.rol)})</span>
          <button onClick={() => navigate('/perfil')} className="btn-primary">Mi Perfil</button>
          <button onClick={cerrarSesion} className="btn-secondary">Cerrar Sesión</button>
        </div>
      </div>

      <AdminMenu />

      <div className="section-card" style={{ padding: '24px', marginTop: '20px' }}>
        {error && <div className="error-box" style={{ marginBottom: '12px' }}>{error}</div>}

        {PERMISOS_DATA.map((seccion) => (
          <div key={seccion.seccion} style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '2px solid #333' }}>
            <h3 style={{ color: '#ff6600', marginBottom: '16px' }}>
              {seccion.seccion}. {seccion.nombre}
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #444' }}>
                    <th style={{ padding: '12px', width: '40%', color: '#ff6600' }}>Módulo / Acción</th>
                    {ROLES.map((rol) => (
                      <th key={`select-${rol}`} style={{ padding: '8px', textAlign: 'center', color: '#ccc', minWidth: '120px' }}>
                        <button
                          type="button"
                          onClick={() => toggleSelectAllRole(rol)}
                          disabled={rol === ADMIN_ROLE}
                          className="btn-primary"
                          style={{ width: '100%', padding: '8px 6px', fontSize: '0.85rem', opacity: rol === ADMIN_ROLE ? 0.6 : 1, cursor: rol === ADMIN_ROLE ? 'not-allowed' : 'pointer' }}
                        >
                          Seleccionar Todo
                        </button>
                      </th>
                    ))}
                  </tr>
                  <tr style={{ borderBottom: '2px solid #ff6600' }}>
                    <th style={{ padding: '12px', width: '40%', color: '#ff6600' }}>Módulo / Acción</th>
                    {ROLES.map((rol) => (
                      <th key={rol} style={{ padding: '12px', textAlign: 'center', color: '#ccc', minWidth: '120px' }}>
                        {rol}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {seccion.modulos.map((modulo) => {
                    const cuNombreKey = `${modulo.cu}_${modulo.nombre}`;
                    return (
                      <React.Fragment key={cuNombreKey}>
                        <tr style={{ borderBottom: '1px solid #444', backgroundColor: '#252525' }}>
                          <td style={{ padding: '12px', color: '#ff6600', fontWeight: 'bold' }}>
                            {modulo.cu} – {modulo.nombre}
                          </td>
                          {ROLES.map((rol) => (
                            <td key={rol} style={{ padding: '12px', textAlign: 'center', backgroundColor: '#1e1e1e' }}>
                              <input
                                type="checkbox"
                                checked={permisos[rol]?.[cuNombreKey]?.acciones?.['Mostrar'] || false}
                                onChange={() => togglePermiso(rol, cuNombreKey, 'Mostrar')}
                                disabled={rol === ADMIN_ROLE}
                                style={{ cursor: rol === ADMIN_ROLE ? 'not-allowed' : 'pointer', width: '18px', height: '18px' }}
                              />
                            </td>
                          ))}
                        </tr>
                        {modulo.acciones.map((accion) => (
                          <tr key={accion} style={{ borderBottom: '1px solid #333', backgroundColor: '#1a1a1a' }}>
                            <td style={{ padding: '12px', paddingLeft: '32px', color: '#aaa', fontSize: '0.95rem' }}>
                              – {accion}
                            </td>
                            {ROLES.map((rol) => (
                              <td key={rol} style={{ padding: '12px', textAlign: 'center' }}>
                                <input
                                  type="checkbox"
                                  checked={permisos[rol]?.[cuNombreKey]?.acciones?.[accion] || false}
                                  onChange={() => togglePermiso(rol, cuNombreKey, accion)}
                                  disabled={rol === ADMIN_ROLE}
                                  style={{ cursor: rol === ADMIN_ROLE ? 'not-allowed' : 'pointer', width: '18px', height: '18px' }}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
          <button
            onClick={guardarPermisos}
            disabled={guardando}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: guardando ? 'not-allowed' : 'pointer',
              opacity: guardando ? 0.6 : 1,
            }}
          >
            {guardando ? 'Guardando...' : 'Guardar Permisos'}
          </button>
          <button
            onClick={goBack}
            style={{
              padding: '10px 20px',
              backgroundColor: '#555',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Volver
          </button>
          <button
            onClick={() => navigate('/inicio')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsignarPrivilegios;