import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { FetchProductsArgs, Product } from './types';

export const fetchProducts = createAsyncThunk<Product[], FetchProductsArgs> (
    'item/fetchProducts',
    async (params: any) => {
        const {page} = params;
        const {data} = await axios.get<Product[]>(`${page}.json`);

        return data;
    }
);