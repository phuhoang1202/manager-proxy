import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { CONSTANT } from '../constants/constant';

const baseURL = import.meta.env.VITE_BACKEND_API_BASE_URL;

const axiosClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(CONSTANT.TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Xử lý lỗi 401, ví dụ: logout người dùng
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
