import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllProducts, selectProducts } from './productsSlice';

const Products = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectProducts);

    useEffect(() => {
        dispatch(loadAllProducts());
    }, [dispatch]);

    const boots = allProducts.filter((product) => product.category_name === 'boots');
    const footballs = allProducts.filter((product) => product.category_name === 'footballs');
    const kits = allProducts.filter((product) => product.category_name === 'kits');
    
}