import {
    getMyUser,
    updateCoverPicture,
    updateProfilePicture,
} from './../api/userApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
    getUserRequest,
    getUserSuccess,
    updateProfileRequest,
} from '../features/auth/userSlice';
import { User } from '../models/user.model';

function* handleGetMyUser(action: PayloadAction<User>) {
    try {
        const user: User = yield call(() => getMyUser());
        console.log(user);

        yield put(getUserSuccess(user));
    } catch (error: any) {
        yield;
    }
}
function* handleUpdateCoverPicture(action: PayloadAction<FormData>) {
    try {
        const user: User = yield call(() => updateCoverPicture(action.payload));
        yield put(getUserSuccess(user));
    } catch (error) {
        yield;
    }
}

function* handleUpdateProfilePicture(action: PayloadAction<FormData>) {
    try {
        const user: User = yield call(() =>
            updateProfilePicture(action.payload)
        );
        yield put(getUserSuccess(user));
    } catch (error) {
        yield;
    }
}

export default function* userSaga() {
    yield takeLatest(getUserRequest.toString(), handleGetMyUser);
    yield takeLatest(updateCoverPicture.toString(), handleUpdateCoverPicture);
    yield takeLatest(
        updateProfileRequest.toString(),
        handleUpdateProfilePicture
    );
}
