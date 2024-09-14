import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CONSTANT } from '../../constants/constant';
import Toast from '../../configs/ToastConfig';
import { formatVNMoney } from '../../utils';

const countries = [
    { code: 'US', name: 'United States', flag: 'https://vipproxy.vn/flags/us.svg' },
    { code: 'SA', name: 'Saudi Arabia', flag: 'https://vipproxy.vn/flags/sa.svg' },
    { code: 'VN', name: 'Vietnam', flag: 'https://vipproxy.vn/flags/vn.svg' },
    { code: 'SG', name: 'Singapore', flag: 'https://vipproxy.vn/flags/sg.svg' },
];

type Packages = {
    packagesName: string;
    countryCode: string;
    quantity: number;
    monthsToBuy: number;
    basePrice: number;
}

type PackageField = keyof Packages;

type PropsSelectCountry = {
    setIsOpenQR: Dispatch<SetStateAction<boolean>>;
}

function SelectCountry({ setIsOpenQR }: PropsSelectCountry) {

    const navigate = useNavigate();
    const [packages, setPackages] = useState<Packages>({
        packagesName: 'Proxy IPv4 Private',
        countryCode: 'US',
        quantity: 1,
        monthsToBuy: 1,
        basePrice: 1000,
    })

    const totalPrice = packages.quantity * packages.monthsToBuy * packages.basePrice;

    const handleChangeFields = (fieldName: PackageField, value: Packages[PackageField]) => {
        if (fieldName === 'quantity' && typeof value === 'number' && (value < 1 || !value)) {
            setPackages({
                ...packages,
                [fieldName]: 1,
            });
        } else {
            setPackages({
                ...packages,
                [fieldName]: value,
            });
        }
    };

    const handleClickBuy = () => {
        const userLogin = JSON.parse(localStorage.getItem(CONSTANT.USERLOGIN) as string || '');
        if (!userLogin) {
            Toast.error('Bạn cần đăng nhập');
            setTimeout(() => navigate('auth/signin'));
        } else {
            // sau này addInfo còn thêm nhiều thông tin liên quan đến account để xác minh giao dịch
            // ${dayjs().format("DD/MM/YYYY HH:mm:ss")}

            const addInfo = `${userLogin.email.replace("@gmail.com", "")} ${packages.countryCode} ${packages.quantity} ${packages.monthsToBuy} ${packages.basePrice} ${totalPrice}`
            localStorage.setItem(CONSTANT.TRANSFER_INFO, JSON.stringify({ packages, totalPrice, addInfo }));
            setIsOpenQR(true);
        }
    }

    return (
        <div className="form-buyProxy mt-4">
            <form className="max-w-full">
                <div className="mb-3">
                    <label htmlFor="countryCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Quốc gia
                    </label>

                    <div className="flex">
                        <select
                            id="countryCode"
                            value={packages.countryCode}
                            className="dark:bg-form-input dark:text-white out-Line-none bg-gray-50 border border-borderColorGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark-focus-outline-none"
                            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                            onChange={(e) => handleChangeFields('countryCode', e.target.value)}
                        >
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                            ))}
                        </select>

                        <div className="p-2 border border-borderColorGray border-left-none bg-[#f1f2f3] dark:bg-graydark flex justify-center items-center">
                            <img
                                style={{ width: '24px', height: 'auto' }}
                                src={countries.find(coutry => coutry.code === packages.countryCode)?.flag}
                                alt="country flag"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="quantity"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Số lượng
                    </label>
                    <input
                        id="quantity"
                        type="number"
                        min={1}
                        required
                        placeholder="1"
                        value={packages.quantity}
                        onChange={(e) => handleChangeFields('quantity', +e.target.value)}
                        className="dark:bg-form-input dark:text-white placeholder out-Line-none bg-gray-50 border border-borderColorGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark-focus-outline-none"
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="monthsToBuy"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Số tháng
                    </label>
                    <select
                        id="monthsToBuy"
                        value={packages.monthsToBuy}
                        onChange={(e) => handleChangeFields('monthsToBuy', e.target.value)}
                        className="dark:bg-form-input dark:text-white out-Line-none bg-gray-50 border border-borderColorGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark-focus-outline-none"
                    >
                        {[1, 2, 3].map((value: number) => (
                            <option key={value} value={value}>{value} tháng</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3 border rounded-md border-btnSignUpHomePage bg-bgCount">
                    <div className="alert alert-light-warning text-center p-3.5 text-btnSignUpHomePage font-bold">
                        Tổng: <span className="sum">{formatVNMoney(totalPrice)}</span>
                    </div>
                </div>
                <button
                    type='button'
                    style={{ width: '100%' }}
                    className="mb-5 bg-btnSignUpHomePage shadow-2x py-1.5 px-3 text-white rounded transition hover:-translate-y-1 hover:shadow-none"
                    onClick={handleClickBuy}
                >
                    Mua ngay
                </button>
            </form>
        </div>
    );
}

export default SelectCountry;
