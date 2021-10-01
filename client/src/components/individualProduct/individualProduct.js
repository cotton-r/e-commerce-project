import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { loadIndividualProduct, selectIndividualProduct } from './individualProductSlice';

const IndividualProduct = () => {
    const dispatch = useDispatch();
    const { category, product } = useParams();
    const decodedProduct = decodeURIComponent(product);
    const individualProduct = useSelector(selectIndividualProduct);
    
    // load the single product from database
    useEffect(() => {
        dispatch(loadIndividualProduct(decodedProduct));
    }, [dispatch, decodedProduct]);

    // return (
    //     <div className='page-container'>
    //         <div className='individual-product-container'>
    //             <p className='individual-product-title'>{product.product_name}</p>
    //             <div className='individual-product-image'>
    //                 <img src={product.image} alt={product.product_name} />
    //             </div>
    //             <p className='individual-product-price'>{product.price}</p>
    //             <p className='individual-product-description'>{product.description}</p>
    //         </div>
    //         <div className='add-to-cart-container'>
    //             {/* <button onClick={dispatch(addToCart(product))}>Add to Cart</button> */}
    //         </div>
    //     </div>
    // );

    return (
        <div>
            <p>hello</p>
        </div>
    )
};

export default IndividualProduct;