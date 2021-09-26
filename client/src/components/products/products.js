import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllProducts, selectProducts } from './productsSlice';

const Products = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectProducts);

    // load all products from database
    useEffect(() => {
        dispatch(loadAllProducts());
    }, [dispatch]);

    // create variable for each category of product
    const boots = allProducts.filter((product) => product.category_name === 'boots');
    const footballs = allProducts.filter((product) => product.category_name === 'footballs');
    const kits = allProducts.filter((product) => product.category_name === 'kits');

    
    return (
        <div className='products container'>
            {allProducts.map((product) => (
                <div key={product.product_id}>
                    <p>{product.product_name}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;