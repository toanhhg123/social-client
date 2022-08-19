import { call, put, takeLatest } from 'redux-saga/effects';
import { changeLike, getMyPost, getPosts, postStatus } from '../api/postApi';
import {
    postLikeReuquest,
    postLikeSuccess,
    postsFail,
    postsRequest,
    postsRequestMyPost,
    postsStatusRequest,
    postsStatusSuccess,
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

function* HandlePostStatus(action: PayloadAction<FormData>) {
    try {
        const post: Post = yield call(() => postStatus(action.payload));

        yield put(postsStatusSuccess(post));
    } catch (error: any) {
        yield put(postsFail(error.message));
    }
}

function* HandlePostLike(action: PayloadAction<string>) {
    try {
        const post: Post = yield call(() => changeLike(action.payload));

        yield put(postLikeSuccess(post));
    } catch (error: any) {
        yield put(postsFail(error.message));
    }
}

export default function* PostSaga() {
    yield takeLatest(postsRequest.toString(), HandleGetPosts);
    yield takeLatest(postsRequestMyPost.toString(), HandleGetMyPost);
    yield takeLatest(postsStatusRequest.toString(), HandlePostStatus);
    yield takeLatest(postLikeReuquest.toString(), HandlePostLike);
}
