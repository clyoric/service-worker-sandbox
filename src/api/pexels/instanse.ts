import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: `PftN23gcC38WP6N7PC5j2cLh4mm1QsSwwHsKxGCe1emwLfaEhiO8eOUg`,
  },
  timeout: 5000,
});

export default axiosInstance;