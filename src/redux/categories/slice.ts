import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoriesSliceState } from './types';

const initialState: CategoriesSliceState = {
    categories: localStorage.getItem('category') || 'Бургеры',
};

export const themeSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<string>) {
            state.categories = action.payload;
        }
    }
});

export const {setCategories} = themeSlice.actions;

export default themeSlice.reducer;