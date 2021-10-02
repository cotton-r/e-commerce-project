import React from 'react';

const CartItem = (product) => {

    const newProduct = Object.values(product);
    console.log(newProduct)

    return (
        <div className='cartItem'>
            {
                newProduct.map((item) => (
                    <div>
                        <img src={item.image} alt={item.product_name} height='70px' width='auto' />
                        <p>{item.product_name}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default CartItem;