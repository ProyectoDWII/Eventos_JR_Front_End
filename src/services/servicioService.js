import api from './api';

export const servicioService = {
  getAll: async () => {
    const response = await api.get('/servicio');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/servicio/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/servicio', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/servicio/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/servicio/${id}`);
    return response.data;
  }
};

export default servicioService;
