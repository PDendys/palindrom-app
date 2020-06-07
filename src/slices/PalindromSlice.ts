import { createSlice } from '@reduxjs/toolkit';
import initialList from 'mocked-data/initalList.json';

const palindromSlice = createSlice({
    name: 'palindrom',
    initialState: {
        list: initialList.items
    },
    reducers: {
        addItem(state, action) {
            const { sentence, isPalindrome } = action.payload;
            state.list.push({ sentence, isPalindrome });
        },
    }
});

export const { addItem } = palindromSlice.actions;
export default palindromSlice.reducer;
