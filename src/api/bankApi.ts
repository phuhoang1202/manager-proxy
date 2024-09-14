import axiosClient from "./axiosClient"
// import dayjs from 'dayjs';

export const fetchTransactions = () => {
    // ở đây sẽ thêm ngày giờ + .... các thông tin quan trọng để mình xác thực giao dịch
    // const today = dayjs().format('YYYY-MM-DD');
    return axiosClient.get(`https://oauth.casso.vn/v2/transactions`, {
        headers: {
            Authorization: `Apikey ${import.meta.env.VITE_API_KEY_MB_BANK}`,
            "Content-Type": "application/json"
        }
    })
}