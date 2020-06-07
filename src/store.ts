import { configureStore } from '@reduxjs/toolkit';

import authSlice from 'slices/AuthSlice';
import palindromeSlice from 'slices/PalindromeSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        palindrome: palindromeSlice
    }
});

export default store;