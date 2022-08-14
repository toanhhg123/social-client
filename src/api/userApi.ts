import { configErrorRefreshToken, configSendRequest } from './config.axios';
import axios from 'axios';
import { User } from '../models/user.model';
import { BASE_URL_USER } from './url.axios';

export const userAxios = axios.create({
    baseURL: BASE_URL_USER,
    headers: {
        'Content-Type': 'application/json',
    },
});

userAxios.interceptors.request.use(configSendRequest, (error) => error);
userAxios.interceptors.response.use(
    (res) => res,
    (error) => configErrorRefreshToken(error, userAxios)
);

export const getMyUser = async (): Promise<User> => {
    try {
        const { data } = await userAxios.get<User>('/my-user');
        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};

export const getUserById = async (id: string): Promise<User> => {
    try {
        const { data } = await userAxios.get<User>('/get-user/' + id);
        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};
