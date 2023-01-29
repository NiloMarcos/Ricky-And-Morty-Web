import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com'
})

export default api;