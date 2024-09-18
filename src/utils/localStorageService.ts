import { CONSTANT } from "../constants/constant";

export const LocalStorageService = {
    saveLoginInfo(user_id: number, token: string) {
        localStorage.setItem(CONSTANT.LOCAL_STORAGE_KEY.USER_ID, JSON.stringify(user_id));
        localStorage.setItem(CONSTANT.LOCAL_STORAGE_KEY.TOKEN, JSON.stringify(token));
    },

    getLoginInfo() {
        const user_id = localStorage.getItem(CONSTANT.LOCAL_STORAGE_KEY.USER_ID);
        const token = localStorage.getItem(CONSTANT.LOCAL_STORAGE_KEY.TOKEN);

        if (user_id && token) {
            return {
                user_id: JSON.parse(user_id),
                token: JSON.parse(token),
            };
        }

        return null;
    },

    clearLoginInfo() {
        localStorage.removeItem(CONSTANT.LOCAL_STORAGE_KEY.USER_ID);
        localStorage.removeItem(CONSTANT.LOCAL_STORAGE_KEY.TOKEN);
    },

    saveTransferInfo(data: TransactionInfo) {
        localStorage.setItem(CONSTANT.LOCAL_STORAGE_KEY.TRANSACTION_INFO, JSON.stringify(data));
    },

    getTransferInfo() {
        const transactionInfo = localStorage.getItem(CONSTANT.LOCAL_STORAGE_KEY.TRANSACTION_INFO);

        if (transactionInfo) {
            return JSON.parse(transactionInfo);
        }

        return null;
    },

    clearTransferInfo() {
        localStorage.removeItem(CONSTANT.LOCAL_STORAGE_KEY.TRANSACTION_INFO);
    },
};

type TransactionInfo = {
    userId: number;
    packageId: number;
    packagesName: string;
    countryCode: string;
    quantity: number;
    monthsToBuy: number;
    basePrice: number;
    totalPrice: number;
    transactionDate: string;
    additionalInfo?: string;
};