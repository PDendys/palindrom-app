import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        authenticateUser(state) {
            state.isAuth = true;
        },
    }
});

export const { authenticateUser } = authSlice.actions;
export default authSlice.reducer;
