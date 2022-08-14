import { AuthRespone } from './../models/auth.model';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
    FormRequestLogin,
    loginFaild,
    loginRequest,
    loginSuccess,
    logout,
    refreshStateAuth,
    registerRequest,
} from '../features/auth/authSlice';
import { login, logOut, register } from '../api/authApi';
import { Session } from '../models/Session';

function* handleLogin(action: PayloadAction<FormRequestLogin>) {
    try {
        const authRespone: AuthRespone = yield call(() =>
            login(action.payload)
        );
        console.log(authRespone.token);
        localStorage.setItem('token', authRespone.token);
        localStorage.setItem('refreshToken', authRespone.session.refreshToken);
        localStorage.setItem('session', JSON.stringify(authRespone.session));

        yield put(refreshStateAuth());
        yield put(loginSuccess(authRespone.session));
    } catch (error: any) {
        yield put(refreshStateAuth());
        yield put(loginFaild(error.message));
    }
}

function* handleLogout(action: PayloadAction<Session>) {
    try {
        yield call(() => logOut(action.payload));
        localStorage.removeItem('token');
        localStorage.removeItem('session');
        localStorage.removeItem('refreshToken');

        yield put(refreshStateAuth());
    } catch (error: any) {
        yield put(refreshStateAuth());
        yield put(loginFaild(error.message));
    }
}

function* handleRegister(action: PayloadAction<FormRequestLogin>) {
    try {
        yield call(() => register(action.payload));
        yield put(loginRequest(action.payload));
    } catch (error: any) {
        yield put(refreshStateAuth());

        yield put(loginFaild(error.message));
    }
}
export default function* authSaga() {
    yield takeLatest(loginRequest.toString(), handleLogin);
    yield takeLatest(registerRequest.toString(), handleRegister);

    yield takeLatest(logout.toString(), handleLogout);
}
