import React, { useEffect, useState } from 'react';
import { connectAdvanced, useDispatch, useSelector } from 'react-redux';
import { loadAllProducts, selectProducts } from '../products/productsSlice';
import CartItem from './cartItem';

import '../../styles/cart.css';

const Cart = ({changeValue}) => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectProducts);

    const [state, setState] = useState();

    useEffect(() => {
        dispatch(loadAllProducts());
    }, [dispatch]);

    const cartItems = Object.keys(sessionStorage);

    const getQuantity = (productID) => {
        return sessionStorage.getItem(productID)
    };

    const increaseQty = (product) => {
        const i = sessionStorage.getItem(JSON.stringify(product.product_id));
        sessionStorage.setItem(JSON.stringify(product.product_id), Number(i) + 1);
        setState({});
        changeValue({});
    }

    const decreaseQty = (product) => {
        const i = sessionStorage.getItem(JSON.stringify(product.product_id));
        sessionStorage.setItem(JSON.stringify(product.product_id), Number(i) - 1);
        setState({});
        changeValue({});
    }

    const removeItem = (product) => {
        sessionStorage.removeItem(JSON.stringify(product.product_id));
        setState({});
        changeValue({});
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
                    return <CartItem 
                                product={product} 
                                quantity={getQuantity(product.product_id)} 
                                key={product.product_id}
                                increaseQty={increaseQty}
                                decreaseQty={decreaseQty}
                                removeItem={removeItem}
                            />
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