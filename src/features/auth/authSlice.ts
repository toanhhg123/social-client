import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { Session } from '../../models/Session';

// Define a type for the slice state
export interface AuthState {
    isLoading?: boolean;
    isLogin: boolean;
    session: Session | null;
    error?: string;
}

// Define the initial state using that type
const initialState: AuthState = {
    isLogin: false,
    session: null,
};

export interface FormRequestLogin {
    userName: string;
    password: string;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerRequest: (state, action: PayloadAction<FormRequestLogin>) => {
            state.isLoading = true;
        },
        loginRequest: (state, action: PayloadAction<FormRequestLogin>) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action: PayloadAction<Session>) => {
            state.isLogin = true;
            state.session = action.payload;
        },
        logout: (state, action: PayloadAction<Session>) => {
            return {
                ...initialState,
            };
        },
        loginFaild: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        refreshStateAuth: () => {
            return {
                ...initialState,
            };
        },
    },
});

export const {
    refreshStateAuth,
    loginSuccess,
    loginFaild,
    loginRequest,
    logout,
    registerRequest,
} = authSlice.actions;
export const isLogin = (state: RootState) => state.auth.isLogin;
export const isLoading = (state: RootState) => state.auth.isLoading;
export const error = (state: RootState) => state.auth.error;
export const session = (state: RootState) => state.auth.session;

export const auth = authSlice.reducer;
