import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import { isLogin } from '../../features/auth/authSlice';

type Props = {};

const PrivateRoute = (props: Props) => {
    const login = useAppSelector(isLogin);
    return login ? <Navigate to={'/home'} /> : <Outlet />;
};

export default PrivateRoute;
