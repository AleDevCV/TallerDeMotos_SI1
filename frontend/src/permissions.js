import { API_BASE_URL } from './config';

const API = `${API_BASE_URL}/api`;

export const fetchPermisosUsuario = async () => {
  const token = localStorage.getItem('token');
  if (!token) return [];

  try {
    const res = await fetch(`${API}/permisos/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json().catch(() => []);
    if (!res.ok || !Array.isArray(data)) return [];
    return data;
  } catch {
    return [];
  }
};

export const tienePermisoModulo = (permisos, codigoCu, acciones = [], rol) => {
  if (rol === 'Administrador') return true;
  if (!Array.isArray(permisos) || permisos.length === 0) return false;

  const accionesSet = new Set((acciones || []).map((accion) => String(accion).toLowerCase()));
  return permisos.some((permiso) => {
    if (!permiso || permiso.codigo_cu !== codigoCu || !permiso.permitido) return false;
    if (accionesSet.size === 0) return true;
    return accionesSet.has(String(permiso.accion || '').toLowerCase());
  });
};

export const tienePermisoCu = (permisos, codigoCu, rol) => {
  if (rol === 'Administrador') return true;
  if (!Array.isArray(permisos) || permisos.length === 0) return false;
  return permisos.some((permiso) => permiso.codigo_cu === codigoCu && permiso.permitido);
};

export const validarPermisoModulo = async (codigoCu, acciones, rol) => {
  const permisos = await fetchPermisosUsuario();
  return tienePermisoModulo(permisos, codigoCu, acciones, rol);
};
