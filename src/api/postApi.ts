import axios from 'axios';
import { Post } from '../models/Post.modle';
import { configErrorRefreshToken, configSendRequest } from './config.axios';
import { BASE_URL_POST } from './url.axios';

const postAxios = axios.create({
    baseURL: BASE_URL_POST,
    headers: {
        'Content-Type': 'application/json',
    },
});

postAxios.interceptors.request.use(configSendRequest, (error) => error);
postAxios.interceptors.response.use(
    (res) => res,
    (error) => configErrorRefreshToken(error, postAxios)
);

export const getPosts = async (): Promise<Array<Post>> => {
    try {
        const { data } = await postAxios.get<Post[]>('/get-posts');

        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};

export const getMyPost = async (postId: string): Promise<Post[]> => {
    try {
        const { data } = await postAxios.get<Post[]>(
            '/get-posts/?postId=' + postId
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

export const postStatus = async (form: FormData): Promise<Post> => {
    try {
        const { data } = await postAxios.post<Post>('/', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(data);
        return data;
    } catch (error: any) {
        const message: string =
            error.response?.data?.message ||
            error.message ||
            'error cannot be identified';

        throw new Error(message);
    }
};
