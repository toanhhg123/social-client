import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface AuthState {
    isLogin: boolean;
    token: string;
}

// Define the initial state using that type
const initialState: AuthState = {
    token: '1231232131223123',
    isLogin: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isLogin = true;
        },
    },
});

export const { loginSuccess } = authSlice.actions;
export const isLogin = (state: RootState) => state.auth.isLogin;
export const auth = authSlice.reducer;
