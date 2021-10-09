import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAllProducts, selectProducts } from './productsSlice';

import '../../styles/products.css';

const Products = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectProducts);

    // load all products from database
    useEffect(() => {
        dispatch(loadAllProducts());
    }, [dispatch]);
        
    return (
        <div className='products-page-container'>
            {allProducts.map((product) => (
                <Link to={`/products/${product.category_name}/${encodeURIComponent(product.product_name)}`}>
                    <div className='product-tile' key={product.product_id}>
                        <div className='product-tile-wrapper'>
                            <div className='image-container'>
                                <img src={product.image} alt={product.product_name} height='auto' width='280px'/>
                            </div>
                            <div className='title-wrapper'>
                                <p>{product.product_name}</p>
                            </div>
                            <p className='product-tile-price'>£{product.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
            <div className='filling-empty-space-childs'></div>
            <div className='filling-empty-space-childs'></div>
            <div className='filling-empty-space-childs'></div>
        </div>
    );
};

export default Products;