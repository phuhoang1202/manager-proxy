import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { LocalStorageService } from '../utils/localStorageService';
import Toast from '../configs/ToastConfig';

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
        const loginInfo = LocalStorageService.getLoginInfo();
        if (loginInfo) {
            config.headers.token = loginInfo.token;
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
        if (error.response?.status === 403) {
            // Xử lý lỗi 401, ví dụ: logout người dùng
            Toast.warn(error.response.data.message);
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
