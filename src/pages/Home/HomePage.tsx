import React from 'react';
import ProxyIPv4 from '../../components/Proxy/ProxyIPv4';

function HomePage() {
  return (
    <>
      <section className="t-homepage-ssOne">
        <div className="container p-5 rounded-xl border-borderColorGray border dark:border-white">
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
            <div className="btn-signIn-signUp text-center">
              <button className="bg-primary shadow-1x py-1.5	px-3 text-white rounded mx-1 transition hover:-translate-y-1 hover:shadow-none">
                Đăng nhập
              </button>
              <button className="bg-btnSignUpHomePage shadow-2x py-1.5	px-3 text-white rounded mx-1 transition hover:-translate-y-1 hover:shadow-none">
                Đăng ký
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
        <ProxyIPv4 />
      </section>
    </>
  );
}

export default HomePage;
