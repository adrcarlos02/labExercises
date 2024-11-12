import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Backend API base URL
  withCredentials: true, // Send cookies and credentials
});

export default api;