import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAllProducts, selectProducts } from './productsSlice';

const Products = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectProducts);

    // load all products from database
    useEffect(() => {
        dispatch(loadAllProducts());
    }, [dispatch]);
        
    return (
        <div className='page-container'>
            {allProducts.map((product) => (
                <Link to={`/products/${product.category_name}/${encodeURIComponent(product.product_name)}`}>
                    <div key={product.product_id}>
                        <p>{product.product_name}</p>
                        <p>{product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Products;