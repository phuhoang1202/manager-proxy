import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

function Contact() {
    return (
        <>
            <Breadcrumb pageName="Liên hệ" />
            <section className="t-section-status border rounded-lg p-5 border-borderColorGray">
                <section className="t-homepage-ssTwo">
                    <div className="text-center">
                        <h2 className="text-title-xl2 mb-2 font-semibold">Liên hệ</h2>
                    </div>
                </section>
                <section className="t-terms-one">
                    <div>
                        <p className="mb-2">Chào các bạn,</p>
                        <p className="mb-2">
                            Để cập nhật thông tin mới nhất, các bạn vui lòng theo dõi kênh Telegram:
                            https://t.me/vipproxyvn
                        </p>
                        <p className="mb-2">Để liên hệ hỗ trợ hoặc hợp tác, các bạn vui lòng thực hiện qua kênh sau:</p>
                        <ul className="list-disc pl-10 mt-3 mb-3 text-title-xxx">
                            <li>
                                <strong>Telegram:</strong> https://t.me/vipproxy_vn
                            </li>
                        </ul>
                        <p className="mb-2">
                            Nếu gặp các vấn đề về Proxy, các bạn vui lòng nhắn quan Facebook, Telegram để lưu lịch sử
                            chat.
                        </p>
                        <p className="mb-2">
                            Hotline chỉ ưu tiên cho các trường hợp khác như: Nạp tiền không vào, Website không truy cập
                            được....
                        </p>
                        <p className="mb-2">Cám ơn các bạn đã và sẽ sử dụng dịch vụ của VipProxy.vn</p>
                        <p className="mb-2">Trân trọng,</p>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Contact;
