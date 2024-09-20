import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

function Policy() {
    return (
        <>
            <Breadcrumb pageName="Chính sách hoàn tiền" />
            <section className="t-section-status border rounded-lg p-5 border-borderColorGray">
                <section className="t-homepage-ssTwo">
                    <div className="text-center">
                        <h2 className="text-title-xl2 mb-2 font-semibold">Chính sách hoàn tiền</h2>
                    </div>
                </section>
                <section className="t-terms-one">
                    <div>
                        <p className="mb-2">
                            Khi bạn mua thành công Proxy trên VipProxy.vn đồng nghĩa với việc bạn đã đọc và đồng ý với
                            các chính sách hoàn/hủy/đổi của chúng tôi.
                        </p>
                        <h2 className="text-black text-title-xl2 mb-2">Chính sách hoàn tiền</h2>
                        <p className="mb-2">
                            Chúng tôi sẽ hoàn tiền đối với Proxy IPv4 Private, Proxy IPv6 Private sau khi bạn mua trong
                            vòng 24h trong trường hợp có lỗi từ chúng tôi, cụ thể: dịch vụ không hoạt động, hiệu suất
                            dịch vụ chậm/không tốt không như mô tả hoặc Proxy sai thông tin.
                        </p>
                        <p className="mb-2">
                            Chúng tôi hoàn tiền về tài khoản VipProxy.vn, không hoàn về tài khoản thanh toán của bạn.
                        </p>
                        <p className="mb-2 decoration-black underline text-black">
                            Proxy IPv4 Shared chỉ áp dụng chinh sách đổi, không hoàn tiền trong bất kỳ trường hợp nào.
                        </p>
                        <h2 className="text-black text-title-xl2 mb-2">Chính sách đổi proxy</h2>
                        <p className="mb-2 ">
                            VipProxy.vn hỗ trợ đổi Proxy IPv4 Private, Proxy IPv4 Shared, Proxy IPv6 Private sau khi mua
                            trong vòng 24h với lý do chính đáng, cụ thể: dịch vụ không hoạt động, hiệu suất dịch vụ
                            chậm/không tốt không như mô tả hoặc Proxy sai thông tin.
                        </p>
                        <h2 className="text-black text-title-xl2 mb-2">Lưu ý</h2>

                        <ul className="list-disc pl-10 mt-3 mb-3 text-title-xxx">
                            <li>
                                Proxy Rotating Residential IPv4 (Proxy Dân cư xoay) không áp dung chính sách hoàn/đổi.
                            </li>
                            <li>
                                24h sau khi mua, chúng tôi không áp dụng chính sách hoàn/đổi cho bất kỳ trường hợp nào.
                                Quý khách vui lòng đọc xem xét kỹ trước khi quyết định mua.
                            </li>
                        </ul>
                        <p className="mb-2">Cám ơn quý khách đã tin tưởng và sử dụng dịch vụ trên VipProxy.vn</p>
                        <p className="mb-2">Trân trọng,</p>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Policy;
