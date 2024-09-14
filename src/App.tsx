import { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
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

import AuthLayout from "./layout/AuthLayout";
import ProxyLayout from "./layout/ProxyLayout";

import { AppDispatch } from './redux/store';
import { loadUserFromLocalStorage } from './redux/features/userSlice';

function App() {
    const [loading, setLoading] = useState<boolean>(false);
    const { pathname } = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        dispatch(loadUserFromLocalStorage())
        setTimeout(() => setLoading(false), 1000);
    }, []);


    return loading ? (
        <Loader />
    ) : (
        <DefaultLayout>
            <Routes>
                <Route index element={<> <PageTitle title="Trang chủ" /> <HomePage /> </>} />

                <Route path='auth' element={<AuthLayout children={<Outlet />} />}>
                    <Route index element={<Navigate to="signin" />} />
                    <Route path="signin" element={<> <PageTitle title="Đăng nhập" /> <SignIn /> </>} />
                    <Route path="signup" element={<> <PageTitle title="Đăng ký" /> <SignUp />  </>} />
                </Route>

                <Route path='buy-proxy'>
                    <Route index element={<BuyProxyOne />} />
                    <Route path="rotating" element={<BuyProxyTwo />} />
                </Route>

                <Route path='proxy' element={<ProxyLayout children={<Outlet />} />}>
                    <Route path="ipv4" element={<ManegementOne />} />
                    <Route path="ipv4-shared" element={<ManegementTwo />} />
                    <Route path="ipv6" element={<ManegementThree />} />
                    <Route path="ipv4-rotating" element={<ManegementFour />} />
                </Route>

                <Route path='utilities'>
                    <Route path="myip" element={<UtilitiesOne />} />
                    <Route path="whois" element={<UtilitiesTwo />} />
                    <Route path="blacklist" element={<UtilitiesThree />} />
                    <Route path="port-check" element={<UtilitiesFour />} />
                    <Route path="website-ipv6-support" element={<UtilitiesFive />} />
                </Route>

                <Route path='posts'>
                    <Route path="news" element={<Status />} />
                    <Route path="term" element={<Terms />} />
                    <Route path="policy" element={<Policy />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </DefaultLayout>
    );
}

export default App;
