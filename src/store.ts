import { configureStore } from '@reduxjs/toolkit';

import authSlice from 'slices/AuthSlice';
import palindromSlice from 'slices/PalindromSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        palindrom: palindromSlice
    }
});

export default store;