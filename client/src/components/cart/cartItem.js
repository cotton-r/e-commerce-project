import React from 'react';

import '../../styles/cartItem.css';

const CartItem = (props) => {

    const { product, quantity } = props;

    return (
        <div className='cart-item-wrapper'>
            {
                    <div className='cart-item' key={product.product_id}>
                        <img className='cart-image' src={product.image} alt={product.product_name} width='170px' height='auto' />
                        <div className='cart-item-details'>
                            <p className='cart-item-name'>{product.product_name}</p>
                            <p className='cart-item-qty'>Quantity: {quantity}</p>
                        </div>
                        <p className='cart-item-price'>£{product.price}</p>
                    </div>
            }
        </div>
    );
};

export default CartItem;