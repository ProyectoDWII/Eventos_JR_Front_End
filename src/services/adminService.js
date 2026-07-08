import api from './api';

export const adminService = {
  /**
   * getAll - Obtiene el listado de todos los usuarios
   */
  getAll: async () => {
    const response = await api.get('/admin/users');
    return response.data; // Retorna { success, count, data: [...] }
  },

  /**
   * getById - Obtiene el detalle de un usuario específico
   */
  getById: async (id) => {
    const response = await api.get(`/admin/users/${id}`);
    return response.data;
  },

  /**
   * update - Actualiza la información de un usuario
   */
  update: async (id, data) => {
    const response = await api.put(`/admin/users/${id}`, data);
    return response.data;
  },

  /**
   * updateRole - Modifica el rol de un usuario
   */
  updateRole: async (id, role) => {
    const response = await api.patch(`/admin/users/${id}/rol`, { role });
    return response.data;
  },

  /**
   * delete - Realiza baja lógica (soft delete) del usuario
   */
  delete: async (id) => {
    const response = await api.delete(`/admin/users/${id}`);
    return response.data;
  },

  /**
   * restore - Restaura una cuenta que fue eliminada por soft delete
   */
  restore: async (id) => {
    const response = await api.patch(`/admin/users/${id}/restore`);
    return response.data;
  }
};

export default adminService;
