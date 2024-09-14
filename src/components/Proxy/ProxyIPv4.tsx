import { Dispatch, SetStateAction } from 'react';
import SelectCountry from './SelectCountry';
import './style.css';

type PropsProxyIPv4 = {
  setIsOpenQR: Dispatch<SetStateAction<boolean>>;
}

function ProxyIPv4({ setIsOpenQR }: PropsProxyIPv4) {
  return (
    <>
      <div className="mt-10">
        <div
          className="bg-gray-200 mx-auto border border-borderColorGray rounded-xl dark:border-white"
          style={{ maxWidth: '50%' }}
        >
          <div className="bg-gray-200 p-8 pb-0">
            <h1 className="text-center text-xl font-bold">
              Proxy IPv4 Private
            </h1>
            <p className="text-center">
              Phù hợp cho hầu hết các website và phần mềm
            </p>
            <p className="text-center text-warning">
              Một người dùng. Cài đặt nhanh
            </p>
            <SelectCountry setIsOpenQR={setIsOpenQR} />
          </div>
          <div className="quantity bg-bgQuantity m-auto">
            <div className="py-3 px-2 text-center text-sm dark:text-white dark:border-white rounded-xl rounded-t-none		 underline decoration-dotted border border-transparent border-t-borderColorGray">
              Số lượng khả dụng
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProxyIPv4;
