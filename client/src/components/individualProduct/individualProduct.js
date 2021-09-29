import React from 'react';
import { useDispatch } from 'react-redux';

const IndividualProduct = ({product}) => {
    const dispatch = useDispatch();

    return (
        <div className='page-container'>
            <div className='individual-product-container'>
                <p className='individual-product-title'>{product.product_name}</p>
                <div className='individual-product-image'>
                    <img src={product.image} alt={product.product_name} />
                </div>
                <p className='individual-product-price'>{product.price}</p>
                <p className='individual-product-description'>{product.description}</p>
            </div>
            <div className='add-to-cart-container'>
                <button onClick={dispatch(addToCart(product))}>Add to Cart</button>
            </div>
        </div>
    );
};

export default IndividualProduct;