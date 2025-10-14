// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.18.0.1:3000',
});

export default api;