import axios from 'axios';

const api = axios.create({
	baseURL: 'https://sigos-backend.vercel.app/api/v1'
});

export default api;