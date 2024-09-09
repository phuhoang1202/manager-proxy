import React from 'react';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

function ProxyIPv4() {
  return (
    <div className="bg-transparent">
      <div className="max-w">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none border-borderColorGray border">
          <div className="p-8 sm:p-10 lg:flex-auto justify-center flex flex-col">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Proxy IPv4 Private
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600 text-sm">
              Phù hợp cho hầu hết các website và phần mềm
            </p>
            <p className="text-base leading-7 text-purple-600 text-sm">
              Một người dùng. Cài đặt nhanh
            </p>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 border-borderColorGray border">
              <div className="mx-auto max-w-xs px-8">
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    52,000
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    VNĐ
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:-translate-y-1 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Mua ngay
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600 underline decoration-borderColorGray cursor-pointer">
                  Số lượng khả dụng
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 border-borderColorGray border">
              <div className="mx-auto max-w-xs px-8">
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    52,000
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    VNĐ
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:-translate-y-1 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Mua ngay
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600 underline decoration-borderColorGray cursor-pointer">
                  Số lượng khả dụng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProxyIPv4;
