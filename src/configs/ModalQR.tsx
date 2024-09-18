import { useState } from "react";
import { fetchTransactions } from "../api/bankApi";
// import { createSubUser } from "../api/proxyApi";
import { LocalStorageService } from "../utils/localStorageService";
import Toast from "./ToastConfig";
import TimeService from "../utils/timeService";
import { CoppySvg } from "../constants/svg";

type PropsModal = {
    closeModal: () => void;
}

const ModalQR: React.FC<PropsModal> = ({ closeModal }) => {

    const recipientBank = {
        bankId: import.meta.env.VITE_BANK_ID,
        accountNo: import.meta.env.VITE_ACCOUNT_NO,
        template: import.meta.env.VITE_TEMPLATE,
    }

    const transactionInfo = LocalStorageService.getTransferInfo();
    const amount: number = +transactionInfo.totalPrice;
    const addInfo: string = transactionInfo.additionalInfo;
    const encodedAddInfo = addInfo.replace(/ /g, "%20");

    const urlQRCode = `https://img.vietqr.io/image/${recipientBank.bankId}-${recipientBank.accountNo}-${recipientBank.template}.jpg?amount=${amount}&addInfo=${encodedAddInfo}`;

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleConfirmation = async () => {
        setIsSubmitting(true);
        try {
            const result = await fetchTransactions();
            if (result.status !== 200) {
                Toast.error("Lỗi server giao dịch");
                return;
            }

            const records = result.data.data.records;
            const transactionFind = records.find((record: any) => record.amount === amount && record.description === addInfo);
            if (!(transactionFind && transactionFind.id)) {
                Toast.error("Chưa tìm thấy giao dịch của bạn");
                return;
            }

            const infos = addInfo.split(' ');
            const lastInfo = infos.at(-1);
            if (!lastInfo) {
                Toast.warn('Thông tin giao dịch không xác thức');
                return;
            }

            const timeTransaction = TimeService.convertTimeQRToISO(lastInfo);
            const whenTransaction = transactionFind.when;
            const isTimeWithinRange = TimeService.isTimeDifferenceEqual(timeTransaction, whenTransaction);
            if (isTimeWithinRange) {
                Toast.warn('Chuyển khoản muộn');
                return;
            }

            Toast.success('Chuyển khoản thành công');
            // call api cap phat sub-user

            // close modal

        } catch (error) {
            Toast.error("Lỗi server giao dịch");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div>
            <div className="modal rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-auto">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <div className="w-full flex justify-end">
                        <strong className="text-xl align-center cursor-pointer "
                            onClick={closeModal}
                        >&times;</strong>
                    </div>
                    <div>
                        <img
                            width={400} alt="QR_Code"
                            src={urlQRCode}
                        />
                    </div>
                    <div className="my-4 max-w-[400px]">
                        <p className="text-red-600">Nội dung chuyển khoản: </p>
                        <p className="text-green-600">
                            <strong>{addInfo}</strong>
                            {' '}
                            <CoppySvg text={addInfo} />
                        </p>
                        <p className="text-red-600 underline">Lưu ý: kiểm tra kỹ nội dung, không đổi nội dung khi chuyển khoản 🚫🚫🚫</p>
                        <p className="text-red-600">Xác nhận chuyển khoản thành công trước khi đóng QR</p>
                    </div>

                    <div>

                        <button
                            type='submit' disabled={isSubmitting}
                            className={`w-full rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 flex items-center justify-center
                                        ${(isSubmitting) ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={handleConfirmation}
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-4 border-gray-200 border-t-white animate-spin"></div>
                            ) : (
                                'Xác nhận đã chuyển xong (đảm bảo đã chuyển)'
                            )}
                        </button>

                        {/* <button type='submit' className={`w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90`}
                            
                        >
                            
                        </button> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ModalQR;