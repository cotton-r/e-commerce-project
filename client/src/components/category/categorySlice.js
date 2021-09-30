import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCategoryProducts = createAsyncThunk('category/loadCategoryProducts', async (category) => {
    const response = await fetch(`/products/${category}`);
    const json = await response.json();

    return json;
});

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categoryProducts: [],
        loadCategoryProductsStatus: 'idle',
    },
    extraReducers: {
        [loadCategoryProducts.pending]: (state, action) => {
            state.loadCategoryProductsStatus = 'loading';
        },
        [loadCategoryProducts.fulfilled]: (state, action) => {
            state.loadCategoryProductsStatus = 'succeeded';
            state.categoryProducts = action.payload;
        },
        [loadCategoryProducts.rejected]: (state, action) => {
            state.loadCategoryProductsStatus = 'failed';
        },
    }
});

export const selectCategoryProducts = (state) => state.category.categoryProducts;

export default categorySlice.reducer;
