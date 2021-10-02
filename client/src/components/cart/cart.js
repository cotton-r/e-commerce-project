import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    return (
        <div>
            {newItems.map(nested => nested.map(product => {
                return <CartItem product={product} />
            }))}
        </div>
    )

};

export default Cart;