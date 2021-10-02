import React, { useEffect } from 'react';
import { connectAdvanced, useDispatch, useSelector } from 'react-redux';
import { loadAllProducts, selectProducts } from '../products/productsSlice';
import CartItem from './cartItem';

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
        <div>
            {newItems.map(nested => nested.map(product => {
                return <CartItem product={product} quantity={sessionStorage.getItem(product.product_id)} key={product.product_id} />
            }))}
            <div>
                <p>Total: £{totalPrice}</p>
            </div>
        </div>
    )

};

export default Cart;