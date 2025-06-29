import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Altere se sua API estiver em outro local
});

export default api;
