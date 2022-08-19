import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../models/Post.modle';
import type { RootState } from '../../app/store';

interface PostState {
    isLoading: boolean;
    error: string;
    posts: Array<Post>;
}

const initialState: PostState = {
    isLoading: false,
    error: '',
    posts: [],
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postsRequest: (state) => {
            state.isLoading = true;
        },
        postLikeReuquest: (state, action: PayloadAction<string>) => {},
        postLikeSuccess: (state, action: PayloadAction<Post>) => {
            console.log(action.payload.id);

            const index = state.posts.findIndex(
                (p) => p.id === action.payload.id
            );
            if (index !== -1) state.posts[index].likes = action.payload.likes;
        },
        postsStatusRequest: (state, action: PayloadAction<FormData>) => {
            state.isLoading = true;
        },
        postsStatusSuccess: (state, action: PayloadAction<Post>) => {
            state.posts.unshift(action.payload);
        },
        postsRequestMyPost: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        postsSuccess: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        postsMyPostSuccess: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        postsFail: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        resetState: () => ({ ...initialState }),
    },
});

export const isLoading = (state: RootState) => state.post.isLoading;
export const error = (state: RootState) => state.post.error;
export const posts = (state: RootState) => state.post.posts;

export const {
    postsFail,
    postsRequest,
    postsSuccess,
    resetState,
    postsRequestMyPost,
    postsMyPostSuccess,
    postsStatusRequest,
    postsStatusSuccess,
    postLikeReuquest,
    postLikeSuccess,
} = postSlice.actions;

export const post = postSlice.reducer;
