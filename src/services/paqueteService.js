import api from './api';

export const paqueteService = {
  getAll: async () => {
    const response = await api.get('/paquete');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/paquete/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/paquete', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/paquete/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/paquete/${id}`);
    return response.data;
  },
};

export default paqueteService;
