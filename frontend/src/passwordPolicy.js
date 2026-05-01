export const PASSWORD_POLICY_MESSAGE =
  'La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un carácter especial.';

export const validateStrongPassword = (password) => {
  if (!password) {
    return 'La nueva contraseña es obligatoria.';
  }

  if (password.length < 8) {
    return 'La nueva contraseña debe tener al menos 8 caracteres.';
  }

  if (!/[a-z]/.test(password)) {
    return 'La nueva contraseña debe incluir al menos una letra minúscula.';
  }

  if (!/[A-Z]/.test(password)) {
    return 'La nueva contraseña debe incluir al menos una letra mayúscula.';
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    return 'La nueva contraseña debe incluir al menos un carácter especial.';
  }

  if (!/[0-9]/.test(password)) {
    return 'La nueva contraseña debe incluir al menos un número.';
  }

  return '';
};
