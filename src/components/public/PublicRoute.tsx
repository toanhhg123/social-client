import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import { isLogin } from '../../features/auth/authSlice';

type Props = {
    children: React.ReactElement;
};

const PublicRoute = (props: Props) => {
    const login = useAppSelector(isLogin);

    return !login ? props.children : <Navigate to={'/home'} replace />;
};

export default PublicRoute;
