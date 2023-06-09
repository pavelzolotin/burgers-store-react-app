import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProducts } from './asyncActions';
import { ProductSliceState, Status, Product } from './types';

const initialState: ProductSliceState = {
    products: [],
    page: localStorage.getItem('page') || 'burgers',
    status: Status.LOADING
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<string>) {
            state.page = action.payload;
        },
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        }
    },
    extraReducers: (builder: any) => {
        builder.addCase(fetchProducts.pending, (state: any) => {
            state.status = Status.LOADING;
            state.products = [];
        })
        builder.addCase(fetchProducts.fulfilled, (state: any, action: any) => {
            state.products = action.payload;
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchProducts.rejected, (state: any) => {
            state.status = Status.ERROR;
            state.products = [];
        })
    }
});

export const {setPage, setProducts} = productSlice.actions;

export default productSlice.reducer;