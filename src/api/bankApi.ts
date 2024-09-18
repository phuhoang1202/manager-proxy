import axiosClient from "./axiosClient"
import dayjs from 'dayjs';

export const fetchTransactions = () => {
    const today = dayjs().format('YYYY-MM-DD');
    return axiosClient.get(`https://oauth.casso.vn/v2/transactions?fromDate=${today}&toDate=${today}`, {
        headers: {
            Authorization: `Apikey ${import.meta.env.VITE_API_KEY_MB_BANK}`,
            "Content-Type": "application/json"
        }
    })
}