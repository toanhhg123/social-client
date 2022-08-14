import { post } from './../features/post/postSlice';
import { auth } from './../features/auth/authSlice';
import { user } from './../features/auth/userSlice';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../saga/rootSaga';

export const keyPersist = 'AUTH_SOCIAL_CLIENT';

export const persistConfig = {
    key: keyPersist,
    storage,
};

const persistedReducer = persistReducer(persistConfig, auth);
const sagaMiddleware = createSagaMiddleware();
export const rootStore = configureStore({
    reducer: { auth: persistedReducer, post, user },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [
        ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(rootStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;
