import React, { useState, useEffect } from 'react';

function SelectCountry() {
  const [countries] = useState([
    {
      code: 'US',
      name: 'United States',
      flag: 'https://vipproxy.vn/flags/us.svg',
    },
    {
      code: 'SA',
      name: 'Saudi Arabia',
      flag: 'https://vipproxy.vn/flags/sa.svg',
    },
    { code: 'VN', name: 'Vietnam', flag: 'https://vipproxy.vn/flags/vn.svg' },
  ]);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [flagUrl, setFlagUrl] = useState('https://vipproxy.vn/flags/us.svg');
  const [count, setCount] = useState(1);
  const [months, setMonths] = useState(1);
  const [basePrice] = useState(52000); // Giá cơ bản là 52,000₫
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    calculateTotalPrice(basePrice, count, months);
  }, [count, months, basePrice]);

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
    const country = countries.find((country) => country.code === selectedCode);
    setSelectedCountry(selectedCode);
    setFlagUrl(country.flag);
  };

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value);
    setCount(newCount);
  };

  const handleMonthsChange = (e) => {
    const newMonths = parseInt(e.target.value);
    setMonths(newMonths);
  };

  const calculateTotalPrice = (basePrice, count, months) => {
    const newTotalPrice = count * months * basePrice;
    setTotalPrice(newTotalPrice); // Cập nhật tổng giá tiền
  };

  return (
    <div className="form-buyProxy mt-4">
      <form className="max-w-full">
        <div className="mb-3">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quốc gia
          </label>

          <div className="flex">
            <select
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              id="countries"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="dark:text-black out-Line-none bg-gray-50 border border-borderColorGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark-focus-outline-none"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            <div
              className="p-4 border border-borderColorGray border-left-none"
              style={{ backgroundColor: '#f1f2f3' }}
            >
              <img
                style={{ width: '20px', height: 'auto' }}
                src={flagUrl}
                alt="country flag"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label
            htmlFor="count"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Số lượng
          </label>
          <input
            type="number"
            id="number-input"
            value={count}
            onChange={handleCountChange}
            className="dark:text-black out-Line-none bg-gray-50 border border-borderColorGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark-focus-outline-none"
            placeholder="1"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="months"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Số tháng
          </label>
          <select
            id="months"
            value={months}
            onChange={handleMonthsChange}
            className="dark:text-black out-Line-none bg-gray-50 border border-borderColorGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark-focus-outline-none"
          >
            <option value={1}>1 tháng</option>
            <option value={2}>2 tháng</option>
            <option value={3}>3 tháng</option>
          </select>
        </div>

        <div className="mb-3 border rounded-md border-btnSignUpHomePage bg-bgCount">
          <div className="alert alert-light-warning text-center p-3.5 text-btnSignUpHomePage font-bold">
            Tổng: <span className="sum">{totalPrice}</span>₫
          </div>
        </div>
        <button
          style={{ width: '100%' }}
          className="mb-5 bg-btnSignUpHomePage shadow-2x py-1.5 px-3 text-white rounded transition hover:-translate-y-1 hover:shadow-none"
        >
          Mua ngay
        </button>
      </form>
    </div>
  );
}

export default SelectCountry;
