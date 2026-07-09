import api from './api';

export const fotografoService = {
  getAll: async () => {
    const response = await api.get('/fotografo');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/fotografo/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/fotografo', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/fotografo/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/fotografo/${id}`);
    return response.data;
  },
};

export default fotografoService;
