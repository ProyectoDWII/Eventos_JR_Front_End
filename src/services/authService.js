import api from './api';

export const authService = {
  getAll: async () => {
    const response = await api.get('/auth');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/auth/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/auth', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/auth/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/auth/${id}`);
    return response.data;
  }
};

export default authService;
