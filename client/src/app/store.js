import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import prodcutsReducer from '../components/products/productsSlice';
import categoryReducer from '../components/category/categorySlice';
import individualProductReducer from '../components/individualProduct/individualProductSlice';

const reducers = combineReducers({
    products: prodcutsReducer,
    category: categoryReducer,
    individualProduct: individualProductReducer,
});

export const store = configureStore({
    reducer: reducers,
});