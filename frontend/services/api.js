import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

console.log('API URL configured:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 second timeout
});

api.interceptors.request.use(
  (config) => {
    // Don't send token for POST requests to courses and universities (no auth required)
    const isCreateRequest = config.method === 'post' && 
      (config.url === '/courses' || config.url === '/universities');
    
    if (!isCreateRequest) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.message);
    
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
      error.message = 'Request timeout. Please try again.';
    } else if (error.code === 'ERR_NETWORK') {
      console.error('Network error - cannot connect to server');
      error.message = 'Cannot connect to server. Please check your internet connection.';
    } else if (!error.response) {
      console.error('No response from server');
      error.message = 'Server is not responding. Please try again later.';
    }
    
    return Promise.reject(error);
  }
);

export default api;
