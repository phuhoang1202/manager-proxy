import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import HomePage from './pages/Home/HomePage';
import BuyProxyOne from './pages/BuyProxy/BuyProxyOne';
import BuyProxyTwo from './pages/BuyProxy/BuyProxyTwo';
import Status from './pages/Information/Status';
import Contact from './pages/Information/Contact';
import Policy from './pages/Information/Policy';
import Terms from './pages/Information/Terms';
import ManegementOne from './pages/UtilityManagement/ManagementProxy/ManegementOne';
import ManegementTwo from './pages/UtilityManagement/ManagementProxy/ManegementTwo';
import ManegementThree from './pages/UtilityManagement/ManagementProxy/ManegementThree';
import ManegementFour from './pages/UtilityManagement/ManagementProxy/ManegementFour';
import UtilitiesOne from './pages/UtilityManagement/UtilitiesFree/UtilitiesOne';
import UtilitiesTwo from './pages/UtilityManagement/UtilitiesFree/UtilitiesTwo';
import UtilitiesThree from './pages/UtilityManagement/UtilitiesFree/UtilitiesThree';
import UtilitiesFour from './pages/UtilityManagement/UtilitiesFree/UtilitiesFour';
import UtilitiesFive from './pages/UtilityManagement/UtilitiesFree/UtilitiesFive';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/muaproxy/muaproxytinh"
          element={
            <>
              <BuyProxyOne />
            </>
          }
        />
        <Route
          path="/muaproxydancuxoay"
          element={
            <>
              <BuyProxyTwo />
            </>
          }
        />
        <Route
          path="/thongtin/baivietganday"
          element={
            <>
              < Status/>
            </>
          }
        />
        <Route
          path="/quanly/ProxyIPv4Private"
          element={
            <>
              <ManegementOne />
            </>
          }
        />
        <Route
          path="/quanly/ProxyIPv4Shared"
          element={
            <>
              <ManegementTwo />
            </>
          }
        />
        <Route
          path="/quanly/ProxyIPv6Private"
          element={
            <>
              <ManegementThree />
            </>
          }
        />
          <Route
          path="/quanly/Proxydancuxoay"
          element={
            <>
              <ManegementFour />
            </>
          }
        />
          <Route
          path="/tienich/tracuuIP"
          element={
            <>
              <UtilitiesOne />
            </>
          }
        />
         <Route
          path="/tienich/tracuutenmien"
          element={
            <>
              <UtilitiesTwo />
            </>
          }
        />
         <Route
          path="/tienich/tracuuBlockIP"
          element={
            <>
              <UtilitiesThree />
            </>
          }
        />
           <Route
          path="/tienich/tracuuPort"
          element={
            <>
              <UtilitiesFour />
            </>
          }
        />
           <Route
          path="/tienich/websitehotroIPv6"
          element={
            <>
              <UtilitiesFive />
            </>
          }
        />
        <Route
          path="/thongtin/dieukien&dieukhoan"
          element={
            <>
              <Terms />
            </>
          }
        />
        <Route
          path="/thongtin/chinhsachhoantien"
          element={
            <>
              <Policy />
            </>
          }
        />
        <Route
          path="/thongtin/lienhe"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/taikhoan/dangnhap"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/taikhoan/dangky"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );

  // Old Routers
  // return loading ? (
  //   <Loader />
  // ) : (
  //   <DefaultLayout>
  //     <Routes>
  //       <Route
  //         index
  //         element={
  //           <>
  //             <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <ECommerce />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/calendar"
  //         element={
  //           <>
  //             <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <Calendar />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/profile"
  //         element={
  //           <>
  //             <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <Profile />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/forms/form-elements"
  //         element={
  //           <>
  //             <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <FormElements />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/forms/form-layout"
  //         element={
  //           <>
  //             <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <FormLayout />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/tables"
  //         element={
  //           <>
  //             <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <Tables />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/settings"
  //         element={
  //           <>
  //             <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <Settings />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/chart"
  //         element={
  //           <>
  //             <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <Chart />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/ui/alerts"
  //         element={
  //           <>
  //             <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <Alerts />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/ui/buttons"
  //         element={
  //           <>
  //             <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <Buttons />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/auth/signin"
  //         element={
  //           <>
  //             <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <SignIn />
  //           </>
  //         }
  //       />
  //       <Route
  //         path="/auth/signup"
  //         element={
  //           <>
  //             <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
  //             <SignUp />
  //           </>
  //         }
  //       />
  //     </Routes>
  //   </DefaultLayout>
  // );
}

export default App;
