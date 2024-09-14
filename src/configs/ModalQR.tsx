import { fetchTransactions } from "../api/bankApi";
import { createSubUser } from "../api/proxyApi";
import { CONSTANT } from "../constants/constant";
import Toast from "./ToastConfig";

type PropsModal = {
    closeModal: () => void;
}

const ModalQR: React.FC<PropsModal> = ({ closeModal }) => {

    const recipientBank = {
        bankId: import.meta.env.VITE_BANK_ID,
        accountNo: import.meta.env.VITE_ACCOUNT_NO,
        template: import.meta.env.VITE_TEMPLATE,
    }

    const transferInfo = JSON.parse(localStorage.getItem(CONSTANT.TRANSFER_INFO) as string);
    const amount = transferInfo?.totalPrice;
    const addInfo = transferInfo?.addInfo;
    const encodedAddInfo = addInfo.replace(/ /g, "%20");

    const urlQRCode = `https://img.vietqr.io/image/${recipientBank.bankId}-${recipientBank.accountNo}-${recipientBank.template}.jpg?amount=${amount}&addInfo=${encodedAddInfo}`;

    const handleConfirmation = async () => {
        const result = await fetchTransactions();
        if (result.status === 200) {
            const records = result.data.data.records
            const transactionFind = records.find((record: any) => record.amount === amount && record.description === addInfo)
            if (transactionFind && transactionFind.id) {
                Toast.success("Bạn đã được cấp Proxy")

                // gọi api tạo subuser
                try {
                    const result = await createSubUser(`thinhdandon`);
                    console.log(result)
                } catch (error) {
                    console.log(error)
                }
            } else {
                Toast.error("Chưa tìm thấy giao dịch của bạn")
            }
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

                    <div className="my-6">
                        <p className="text-red-600">Lưu ý: không đổi nội dung khi chuyển khoản 🚫🚫🚫</p>
                    </div>

                    <div>
                        <button type='submit' className={`w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90`}
                            onClick={handleConfirmation}
                        >
                            Xác nhận đã chuyển xong (đảm bảo đã chuyển)
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ModalQR;