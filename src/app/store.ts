import { post } from './../features/post/postSlice';
import { auth } from './../features/auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'auth-social',
    storage,
};

const persistedReducer = persistReducer(persistConfig, auth);
export const rootStore = configureStore({
    reducer: { auth: persistedReducer, post },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export const persistor = persistStore(rootStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;
