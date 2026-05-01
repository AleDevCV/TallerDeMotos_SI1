import { normalizeRoleText } from './textNormalization';

export const normalizeRole = (rol) => {
  return normalizeRoleText(rol);
};

export const getHomeRouteByRole = (rol) => {
  const r = normalizeRole(rol);
  if (r === 'administrador') return '/bitacora';
  if (r === 'recepcionista') return '/inicio';
  if (r === 'cliente') return '/mis-motocicletas';
  if (r === 'mecanico') return '/inicio';
  return '/login';
};
