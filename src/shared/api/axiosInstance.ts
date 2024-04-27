/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(async (config) => ({
  ...config,
}));

export default axiosInstance;
