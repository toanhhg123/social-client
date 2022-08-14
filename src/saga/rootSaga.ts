import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import PostSaga from './postSaga';
import userSaga from './userSaga';
export default function* RootSaga() {
    yield all([authSaga(), userSaga(), PostSaga()]);
}
