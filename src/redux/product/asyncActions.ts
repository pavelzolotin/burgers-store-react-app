import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Product } from './types';

export const fetchProducts = createAsyncThunk<Product[]>(
    'item/fetchProducts',
    async () => {
        const {data} = await axios.get<Product[]>(
            `https://645b40dda8f9e4d6e7636f96.mockapi.io/burgers`
        );

        return data;
    }
);