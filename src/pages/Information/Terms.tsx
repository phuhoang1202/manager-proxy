import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

function Terms() {
    return (
        <>
            <Breadcrumb pageName="Điều kiện điều khoản" />
            <section className="t-section-status border rounded-lg p-5 border-borderColorGray">
                <section className="t-homepage-ssTwo">
                    <div className="text-center">
                        <h2 className="text-title-xl2 mb-2 font-semibold">Điều kiện & điều khoản</h2>
                    </div>
                </section>
                <section className="t-terms-one">
                    <div>
                        <p className="mb-2">
                            Khi bạn mua thành công Proxy trên VipProxy.vn đồng nghĩa với việc bạn đã đọc và đồng ý với
                            các điều kiện, điều khoản của chúng tôi.
                        </p>
                        <h2 className="text-black text-title-xl2 mb-2">Hành vi bị cấm</h2>
                        <p>Chúng tôi cấm sử dụng proxy đã mua trên VipProxy.vn để thực hiện các hành vi sau:</p>
                        <ul className="list-disc pl-10 mt-3 mb-3 text-title-xxx">
                            <li>Gian lận, trộm cắp, lăng mạ, đe dọa và vu khống;</li>
                            <li>Lựa chọn mật khẩu (bruteforce), quét lỗ hổng cổng;</li>
                            <li>Tạo các trang web lừa đảo;</li>
                            <li>
                                Thư rác (bao gồm thư rác trên các diễn đàn, trang web, blog), bất kỳ hoạt động nào có
                                thể dẫn đến địa chỉ IP của máy chủ trong danh sách đen (BlockList.de, SpamHaus,
                                StopForumSpam, SpamCop, v.v.);
                            </li>
                            <li>Gửi email;</li>
                            <li>
                                Phát tán phần mềm độc hại (virus, trojan và bất kỳ thứ gì có thể ảnh hưởng đến hoạt động
                                của phần mềm);
                            </li>
                            <li>Hack các trang web và tìm lỗ hổng của chúng (bao gồm cả sql-inj);</li>
                            <li>
                                Phân phối tài liệu mà chủ sở hữu bản quyền không hề hay biết (Video, âm nhạc, phần mềm,
                                v.v.);
                            </li>
                            <li>Vi phạm luật pháp của quốc gia nơi đặt máy chủ mà bạn đang kết nối.</li>
                        </ul>
                        <p className="text-red-500 mb-2">
                            Nếu bạn thực hiện các hành động bất hợp pháp, bạn hoàn toàn chịu trách nhiệm cá nhân, hành
                            chính và hình sự đối với tất cả các hành động và hậu quả của chúng.
                        </p>
                        <p className="mb-2">Cám ơn quý khách đã tin tưởng và sử dụng dịch vụ trên VipProxy.vn</p>
                        <p className="mb-2">Trân trọng,</p>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Terms;
