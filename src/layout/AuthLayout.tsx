import { ReactNode, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CONSTANT } from '../constants/constant';

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    const navigate = useNavigate();

    useLayoutEffect(() => {
        // code check cache account
        const userLogin = JSON.parse(localStorage.getItem(CONSTANT.USERLOGIN) as string);
        if (userLogin) {
            navigate('/');
            return
        }
    }, [])

    return (
        <>
            {children}
        </>
    );
};

export default AuthLayout;