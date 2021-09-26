import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import prodcutsReducer from '../components/productsSlice';

export const store = configureStore({
    reducer: {
        products: prodcutsReducer,
    },
});