import api from './api';

export const adminService = {
  getAll: async () => {
    const response = await api.get('/admin');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/admin/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/admin', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/admin/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/admin/${id}`);
    return response.data;
  }
};

export default adminService;
