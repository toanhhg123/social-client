import { getMyUser } from './../api/userApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserRequest, getUserSuccess } from '../features/auth/userSlice';
import { User } from '../models/user.model';

function* handleGetMyUser(action: PayloadAction<User>) {
    try {
        const user: User = yield call(() => getMyUser());
        yield put(getUserSuccess(user));
    } catch (error) {
        yield;
    }
}

export default function* userSaga() {
    yield takeLatest(getUserRequest.toString(), handleGetMyUser);
}
