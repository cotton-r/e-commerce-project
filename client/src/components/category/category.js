import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategoryProducts, selectCategoryProducts } from './categorySlice';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectCategoryProducts);
    const { category } = useParams();

    // load all products from database
    useEffect(() => {
        dispatch(loadCategoryProducts(category));
    }, [dispatch, category]);
    
    return (
        <div className='page-container'>
            {products.map((product) => (
                <Link to={`/products/${product.category_name}/${encodeURIComponent(product.product_name)}`}>
                    <div key={product.product_id}>
                        <p>{product.product_name}</p>
                        <p>{product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Category;