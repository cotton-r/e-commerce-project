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
                            <div className='title-wrapper'>
                                <p>{product.product_name}</p>
                            </div>
                            <div className='image-container'>
                                <img src={product.image} alt={product.product_name} height='auto' width='300px'/>
                            </div>
                            <p>£{product.price}</p>
                            <button className='add-to-cart-button' onClick={() => {
                                if (!sessionStorage.getItem(JSON.stringify(product.product_id))) {
                                    sessionStorage.setItem(JSON.stringify(product.product_id), 1);
                                } else {
                                    const i = sessionStorage.getItem(JSON.stringify(product.product_id));
                                    sessionStorage.setItem(JSON.stringify(product.product_id), Number(i) + 1);
                                }
                            }}>Add to cart</button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Products;