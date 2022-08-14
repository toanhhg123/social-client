import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { User } from '../../models/user.model';

// Define a type for the slice state
export interface UserState {
    isLoading?: boolean;
    user: User | null;
    error?: string;
}

// Define the initial state using that type
const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserRequest: (state) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { getUserSuccess, getUserRequest } = userSlice.actions;
export const userState = (state: RootState) => state.user.user;

export const user = userSlice.reducer;
