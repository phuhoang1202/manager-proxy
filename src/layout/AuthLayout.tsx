import { ReactNode, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalStorageService } from '../utils/localStorageService';

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    const navigate = useNavigate();

    useLayoutEffect(() => {
        const userLogin = LocalStorageService.getLoginInfo();
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