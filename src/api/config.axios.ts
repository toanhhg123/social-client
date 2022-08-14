import { Session } from './../models/Session';
import { keyPersist } from './../app/store';
import { AxiosRequestConfig, AxiosError, AxiosInstance } from 'axios';
import { refreshToken } from './authApi';

export const getTokenStore = (): string | null => {
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error();
        return token;
    } catch (error) {
        return null;
    }
};

export const configSendRequest = async (config: AxiosRequestConfig) => {
    const token = getTokenStore();

    if (token)
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        };

    return config;
};

export const configErrorRefreshToken = async (
    error: AxiosError,
    axios: AxiosInstance
): Promise<any> => {
    try {
        const originalRequest = error.config;
        const status = error.response ? error.response.status : null;
        if (status === 403) {
            let session = localStorage.getItem('session');
            if (session) {
                const sessionStore = JSON.parse(session);
                const token = await refreshToken(sessionStore);

                localStorage.setItem('token', token);
                return axios(originalRequest);
            }
        }
        return Promise.reject(error);
    } catch (error) {
        return Promise.reject(error);
    }
};
