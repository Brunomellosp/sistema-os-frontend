// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token'); // mesma key do login

    if (token) {
      // garante que o header Authorization SEMPRE vai junto
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
