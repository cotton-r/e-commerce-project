import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { loadIndividualProduct, selectIndividualProduct } from './individualProductSlice';
import '../../styles/individualProduct.css';

const IndividualProduct = ({changeValue}) => {
    const dispatch = useDispatch();
    const { product } = useParams();
    const individualProduct = useSelector(selectIndividualProduct);

    // load the single product from database
    useEffect(() => {
        dispatch(loadIndividualProduct(product));
    }, [dispatch, product]);

    return (
        <div className='individual-product-container'>
            {individualProduct.map((product) => (
                <div className='individual-product-box'> 
                    <p className='individual-product-name'>{product.product_name}</p>
                    <div className='individual-product-wrapper'>
                        <div className='individual-product-image'>    
                            <img src={product.image} alt={product.product_name} width='560px' height='auto'/>
                        </div>
                        <div className='individual-product-details'>
                            <div className='description-wrapper'>
                                <p className='description-title'>Product description:</p>
                                <p className='individual-product-description'>{product.description}</p>
                            </div>
                            <p className='individual-product-price'>£{product.price}</p>
                    
                            <button className='add-to-cart-button' onClick={() => {
                                if (!sessionStorage.getItem(JSON.stringify(product.product_id))) {
                                    sessionStorage.setItem(JSON.stringify(product.product_id), 1);
                                    changeValue({});
                                } else {
                                    const i = sessionStorage.getItem(JSON.stringify(product.product_id));
                                    sessionStorage.setItem(JSON.stringify(product.product_id), Number(i) + 1);
                                    changeValue({});
                                }
                            }}>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IndividualProduct;