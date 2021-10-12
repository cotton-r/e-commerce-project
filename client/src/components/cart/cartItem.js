import React from 'react';

import '../../styles/cartItem.css';

const CartItem = (props) => {

    const { product, quantity, increaseQty, decreaseQty, removeItem } = props;

    return (
        <div className='cart-item-wrapper'>
            {
                    <div className='cart-item' key={product.product_id}>
                        <img className='cart-image' src={product.image} alt={product.product_name} width='170px' height='auto' />
                        <div className='cart-item-details'>
                            <p className='cart-item-name'>{product.product_name}</p>
                            <p className='cart-item-qty'>Quantity:</p>
                            <div className='qty-box'>
                                <button id='minus-btn' onClick={() => {
                                    decreaseQty(product)
                                }}>
                                    -
                                </button>
                                <p>{ quantity < 2 ? 1 : quantity }</p>
                                <button id='plus-btn' onClick={() => {
                                    increaseQty(product)
                                }}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='cart-final-column'>
                            <p className='cart-item-price'>£{product.price}</p>
                            <button id='delete-button' onClick={() => {
                                removeItem(product)
                            }}></button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CartItem;