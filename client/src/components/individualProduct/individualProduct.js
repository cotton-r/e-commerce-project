import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { loadIndividualProduct, selectIndividualProduct } from './individualProductSlice';

const IndividualProduct = () => {
    const dispatch = useDispatch();
    const { product } = useParams();
    const decodedProduct = decodeURIComponent(product);
    const individualProduct = useSelector(selectIndividualProduct);
    console.log(individualProduct);

    // load the single product from database
    useEffect(() => {
        dispatch(loadIndividualProduct(product));
    }, []);
    
    return (
        <div className='page-container'>
            {individualProduct.map((product) => (
                <div>
                    <p>{product.product_name}</p>
                    <p>{product.price}</p>
                    <img src={product.image} alt={product.product_name} height='500px' width='auto'/>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default IndividualProduct;