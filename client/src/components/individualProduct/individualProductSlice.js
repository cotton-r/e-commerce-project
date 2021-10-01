import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadIndividualProduct = createAsyncThunk('individualProduct/loadIndividualProduct', async (product) => {
    const response = await fetch(`/products/:/${product}`);
    const json = await response.json();

    return json;
});

export const individualProductSlice = createSlice({
    name: 'individualProduct',
    initialState: {
        individualProduct: [],
        loadindividualProductStatus: 'idle',
    },
    extraReducers: {
        [loadIndividualProduct.pending]: (state, action) => {
            state.loadindividualProductStatus = 'loading';
        },
        [loadIndividualProduct.fulfilled]: (state, action) => {
            state.loadindividualProductStatus = 'succeeded';
            state.individualProduct = action.payload;
        },
        [loadIndividualProduct.rejected]: (state, action) => {
            state.loadindividualProductStatus = 'failed';
        },
    }
});

export const selectIndividualProduct = (state) => state.individualProduct.individualProduct;

export default individualProductSlice.reducer;