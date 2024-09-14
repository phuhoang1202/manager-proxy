import React from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

// Wrapper around toast functions
const Toast = {
    success: (message: string, options: ToastOptions = {}) => {
        toast.success(message, { ...defaultOptions, ...options });
    },
    error: (message: string, options: ToastOptions = {}) => {
        toast.error(message, { ...defaultOptions, ...options });
    },
    info: (message: string, options: ToastOptions = {}) => {
        toast.info(message, { ...defaultOptions, ...options });
    },
    warn: (message: string, options: ToastOptions = {}) => {
        toast.warn(message, { ...defaultOptions, ...options });
    },
    custom: (message: string, options: ToastOptions = {}) => {
        toast(message, { ...defaultOptions, ...options });
    },
};

// Export ToastContainer and custom Toast functions
export const ToastProvider: React.FC = () => <ToastContainer />;

export default Toast;