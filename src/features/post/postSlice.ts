import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';

// Define a type for the slice state
interface PostState {
    comment: string;
}

// Define the initial state using that type
const initialState: PostState = {
    comment: '1231232131223123',
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
});

export const post = postSlice.reducer;
