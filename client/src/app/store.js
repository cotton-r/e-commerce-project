import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import prodcutsReducer from '../components/products/productsSlice';
import categoryReducer from '../components/category/categorySlice';

const reducers = combineReducers({
    products: prodcutsReducer,
    category: categoryReducer,
});

export const store = configureStore({
    reducer: reducers,
});