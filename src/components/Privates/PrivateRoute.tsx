import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import { isLogin } from '../../features/auth/authSlice';
import { getUserRequest } from '../../features/auth/userSlice';

type Props = {
    children: React.ReactElement;
};

const PrivateRoute = () => {
    const login = useAppSelector(isLogin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserRequest());
    }, [dispatch]);
    return !login ? <Navigate to={'/login'} /> : <Outlet />;
};

export const PrivateComponent = (props: Props) => {
    const login = useAppSelector(isLogin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserRequest());
    }, [dispatch]);
    return !login ? <Navigate to={'/login'} /> : props.children;
};

export default PrivateRoute;
