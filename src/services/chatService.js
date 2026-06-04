import api from './api';

export const chatService = {
  getAll: async () => {
    const response = await api.get('/chat');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/chat/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post('/chat', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`/chat/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/chat/${id}`);
    return response.data;
  }
};

export default chatService;
