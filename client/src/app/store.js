import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import prodcutsReducer from './';

export const store = configureStore({
    reducer: {
        products: prodcutsReducer,
    },
});