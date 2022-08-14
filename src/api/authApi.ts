import { Session } from './../models/Session';
import { FormRequestLogin } from './../features/auth/authSlice';
import axios from 'axios';
import { AuthRespone } from '../models/auth.model';
import { BASE_URL_AUTH } from './url.axios';

export const authAxios = axios.create({
    baseURL: BASE_URL_AUTH,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (form: FormRequestLogin): Promise<AuthRespone> => {
    try {
        const { data } = await authAxios.post<AuthRespone>('/login', form);
        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};

export const logOut = async (session: Session): Promise<number> => {
    try {
        const { data } = await authAxios.post<number>('/logout', session);
        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};

export const refreshToken = async (session: Session): Promise<string> => {
    try {
        const { data } = await authAxios.post<string>(
            '/refresh-token',
            session
        );
        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};

export const register = async (user: FormRequestLogin): Promise<string> => {
    try {
        const { data } = await authAxios.post<string>('/create-user', user);
        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};
