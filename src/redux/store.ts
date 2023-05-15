import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import themeSlice from './themeMode/slice';
import productSlice from './product/slice';
import cartSlice from './cart/slice';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        product: productSlice,
        cart: cartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();