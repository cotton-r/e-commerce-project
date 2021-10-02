import React from 'react';

const CartItem = (props) => {

    const { product, quantity } = props;

    return (
        <div className='cartItem'>
            {
                    <div key={product.product_id}>
                        <img src={product.image} alt={product.product_name} height='70px' width='auto' />
                        <p>{product.product_name}</p>
                        <p>{product.price}</p>
                        <p>{quantity}</p>
                    </div>
            }
        </div>
    );
};

export default CartItem;