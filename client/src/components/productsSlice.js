import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllProducts = createAsyncThunk('products/loadAllProducts', async () => {
    const response = await fetch('/products');
    const json = await response.json();

    return json;
});

