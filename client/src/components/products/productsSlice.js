import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllProducts = createAsyncThunk('products/loadAllProducts', async () => {
    const response = await fetch('/products');
    const json = await response.json();

    return json;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    }
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;

