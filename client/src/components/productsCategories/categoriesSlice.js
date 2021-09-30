import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCategoryProducts = createAsyncThunk('productsCategories/loadCategoryProducts', async (category) => {
    const response = await fetch(`/products/${category}`);
    const json = await response.json();

    return json;
});

export const categoriesSlice = createSlice({
    name: 'categoryProducts',
    initialState: {
        products: [],
        loadProductsStatus: 'idle',
    },
    extraReducers: {
        [loadCategoryProducts.pending]: (state, action) => {
            state.loadProductsStatus = 'loading';
        },
        [loadCategoryProducts.fulfilled]: (state, action) => {
            state.loadProductsStatus = 'succeeded';
            state.products = action.payload;
        },
        [loadCategoryProducts.rejected]: (state, action) => {
            state.loadProductsStatus = 'failed';
        },
    }
});

export const selectCategoryProducts = (state) => state.categoryProducts.products;

export default categoriesSlice.reducer;
