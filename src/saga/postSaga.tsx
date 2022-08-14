import { handleBreakpoints } from '@mui/system';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getMyPost, getPosts } from '../api/postApi';
import {
    postsFail,
    postsRequest,
    postsRequestMyPost,
    postsSuccess,
    resetState,
} from '../features/post/postSlice';
import { Post } from '../models/Post.modle';
import { PayloadAction } from '@reduxjs/toolkit';

function* HandleGetPosts() {
    try {
        const posts: Array<Post> = yield call(() => getPosts());

        yield put(postsSuccess(posts));
    } catch (error: any) {
        yield put(resetState());
        yield put(postsFail(error.message));
    }
}

function* HandleGetMyPost(action: PayloadAction<string>) {
    try {
        const myPost: Post[] = yield call(() => getMyPost(action.payload));
        console.log(myPost);

        yield put(postsSuccess(myPost));
    } catch (error: any) {
        yield put(resetState());
        yield put(postsFail(error.message));
    }
}

export default function* PostSaga() {
    yield takeLatest(postsRequest.toString(), HandleGetPosts);
    yield takeLatest(postsRequestMyPost.toString(), HandleGetMyPost);
}
