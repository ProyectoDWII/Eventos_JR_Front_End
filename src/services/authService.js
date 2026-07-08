import api from './api';

export const authService = {
  /**
   * login - Autentica a un usuario
   * @param {Object} credentials - { email, password }
   */
  login: async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data; // Retorna { token, user: { id, email, name, role } }
  },

  /**
   * register - Registra a un nuevo usuario
   * @param {Object} userData - { name, email, password, role, phoneNumber }
   */
  register: async (userData) => {
    // Mapeamos el rol del frontend al esperado por el backend:
    // 'cliente' -> 'client'
    // 'fotografo' -> 'admin' (El fotógrafo administra todo el sistema)
    const apiRole = userData.role === 'fotografo' ? 'admin' : 'client';
    const response = await api.post('/auth/register', {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: apiRole,
      phoneNumber: userData.phoneNumber
    });
    return response.data; // Retorna { token, user }
  },

  /**
   * getProfile - Obtiene el perfil del cliente logueado (protegido)
   */
  getProfile: async () => {
    const response = await api.get('/client/profile');
    return response.data;
  },

  /**
   * logout - Cierra la sesión en el servidor y limpia la cookie HttpOnly
   */
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};

export default authService;
