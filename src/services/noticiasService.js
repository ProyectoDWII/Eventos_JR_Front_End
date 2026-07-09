import api from './api';

export const noticiasService = {
  getAll: async () => {
    const response = await api.get('/noticias');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/noticias/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/noticias', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/noticias/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/noticias/${id}`);
    return response.data;
  },
};

export default noticiasService;
