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
        loadProductsStatus: 'idle',
    },
    extraReducers: {
        [loadAllProducts.pending]: (state, action) => {
            state.loadProductsStatus = 'loading';
        },
        [loadAllProducts.fulfilled]: (state, action) => {
            state.loadProductsStatus = 'succeeded';
            state.products = action.payload;
        },
        [loadAllProducts.rejected]: (state, action) => {
            state.loadProductsStatus = 'failed';
        },
    }
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;

