import api from './api';

export const solicitudService = {
  getAll: async () => {
    const response = await api.get('/solicitud');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/solicitud/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/solicitud', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/solicitud/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/solicitud/${id}`);
    return response.data;
  }
};

export default solicitudService;
