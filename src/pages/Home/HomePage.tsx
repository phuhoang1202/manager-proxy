import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import ProxyIPv4 from '../../components/Proxy/ProxyIPv4';
import HistoryByProxyTable from '../../components/Proxy/HistoryBuyProxyTable';
import { useAppSelector } from '../../hooks/useAppSelector';
import ModalQR from '../../configs/ModalQR';
import { LocalStorageService } from '../../utils/localStorageService';

function HomePage() {

    const user = useAppSelector(state => state.user.data);
    const userLocal = LocalStorageService.getLoginInfo();
    const [isOpenQR, setIsOpenQR] = useState<boolean>(false);

    const handleCloseQR = () => {
        LocalStorageService.clearTransferInfo();
        setIsOpenQR(false)
    }

    return (
        <>
            <div className='relative'>

                {
                    isOpenQR ?
                        <div className='absolute w-full h-full z-10' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', pointerEvents: 'auto' }} >
                            <div className='absolute w-full top-10 flex justify-center' >
                                <ModalQR closeModal={handleCloseQR} />
                            </div>
                        </div>
                        : null
                }

                <section className="t-homepage-ssOne">
                    <div
                        className="container p-5 rounded-xl border-borderColorGray border dark:border-white"
                        style={{ maxWidth: '100%' }}
                    >
                        <div className="pb-3">
                            <p className="text-center	text-title-xxx mb-2.5	">
                                VipProxy.vn - Cung cấp Proxy IPv6 Private, Proxy IPv4 Private,
                                Proxy IPv4 Shared, Proxy Dân cư xoay (Rotating Residential Proxy)
                                và nhiều loại Proxy khác, được cập nhật liên tục hàng ngày, đa
                                dạng quốc gia và vùng lãnh thổ.
                            </p>
                            <p className="text-center	text-title-xxx mb-2.5	">
                                Với hơn <b>5 năm</b> hoạt động trong lĩnh vực, chúng tôi cam kết
                                mang đến cho bạn sự <b>Chất lượng - Uy tín</b> và
                                <b> luôn luôn giá rẻ.</b>
                            </p>
                            <p className="text-center	text-title-xxx mb-2.5	text-colorGreenTitle">
                                <strong>
                                    Hệ thống hoạt động tự động 24/7 kể cả cuối tuần, Lễ, Tết...
                                </strong>
                            </p>
                            <div
                                className={`btn-signIn-signUp text-center m-auto ${(user || userLocal) ? 'hidden' : 'flex'} justify-between gap-4`}
                                style={{ maxWidth: '13%' }}
                            >
                                <button className="bg-primary shadow-1x py-1.5	px-3 text-white rounded transition hover:-translate-y-1 hover:shadow-none min-w-max">
                                    <Link to='/auth/signin' >Đăng nhập</Link>
                                </button>
                                <button className="bg-btnSignUpHomePage shadow-2x py-1.5	px-3 text-white rounded transition hover:-translate-y-1 hover:shadow-none min-w-max">
                                    <Link to='/auth/signup' >Đăng ký</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="t-homepage-ssTwo mt-8">
                    <div className="text-center">
                        <h2 className="text-title-xl2 mb-2 font-semibold">
                            Chọn gói proxy cần mua
                        </h2>
                        <p className="text-sm">
                            Hơn 1.000.000+ thành viên tin dùng và hài lòng
                        </p>
                    </div>
                    <ProxyIPv4 setIsOpenQR={setIsOpenQR} />
                </section>

                <section className="t-homepage-ssThree mt-8">
                    <div className="w-11/12	m-auto border rounded border-borderColorGray">
                        <div className="bg-bgQuantity border  border-b-borderColorGray border-t-0 border-l-0 border-r-0">
                            <div className="py-3 px-5">
                                <h5 className="font-bold	text-xl	text-black dark:text-white">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                                    &nbsp; Lịch sử mua Proxy
                                </h5>
                            </div>
                        </div>
                        <div className="p-5">
                            <HistoryByProxyTable />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomePage;
