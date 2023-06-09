import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './themeMode/slice';
import categoriesSlice from './categories/slice';
import cartSlice from './cart/slice';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        categories: categoriesSlice,
        cart: cartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;