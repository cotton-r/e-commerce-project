import React, { useEffect } from 'react';
import { connectAdvanced, useDispatch, useSelector } from 'react-redux';
import { loadAllProducts, selectProducts } from '../products/productsSlice';
import CartItem from './cartItem';

import '../../styles/cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectProducts);

    useEffect(() => {
        dispatch(loadAllProducts());
    }, [dispatch]);

    const cartItems = Object.keys(sessionStorage);

    const getQuantity = (productID) => {
        sessionStorage.getItem(productID)
    };

    const newItems = [];
    
    cartItems.forEach(item => {
        newItems.push(allProducts.filter(product => product.product_id == item));
    });

    let totalPrice = Number();
    newItems.forEach(nested => nested.forEach(item => totalPrice += Number(item.price) * sessionStorage.getItem(item.product_id)));

    return (
        <div className='cart-container'>
            <div className='cart-items-section'>
                {newItems.map(nested => nested.map(product => {
                    return <CartItem product={product} quantity={sessionStorage.getItem(product.product_id)} key={product.product_id} />
                }))}
            </div>
            <div className='cart-total'>
                <div className='costs'>
                    <div className='price-row'>
                        <p>Subtotal:</p>
                        <p>£{Number(totalPrice).toFixed(2)}</p>
                    </div>
                    <div className='price-row'>
                        <p>Delivery charge:</p>
                        <p>£0.00</p>
                    </div>
                    <div className='price-row final-price'>
                        <p>Total:</p>
                        <p>£{Number(totalPrice).toFixed(2)}</p>
                    </div>
                </div>
                <div className='checkout-btn-wrapper'>
                    <button className='checkout-btn'>Checkout</button>
                </div>
            </div>
        </div>
    )

};

export default Cart;