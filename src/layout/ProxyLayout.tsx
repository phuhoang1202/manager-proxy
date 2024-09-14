import { ReactNode, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';

const ProxyLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    const navigate = useNavigate();
    const userLogin = useAppSelector(state => state.user.data);

    useLayoutEffect(() => {
        if (!userLogin) {
            navigate('/auth/signin');
            return
        }
    }, [userLogin])

    return (
        <>
            {children}
        </>
    );
};

export default ProxyLayout;