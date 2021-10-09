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
        <div className='products-page-container'>
            {products.map((product) => (
                <Link to={`/products/${product.category_name}/${encodeURIComponent(product.product_name)}`}>
                    <div className='product-tile' key={product.product_id}>
                        <div className='product-tile-wrapper'>
                            <div className='image-container'>
                                <img src={product.image} alt={product.product_name} height='auto' width='280px'/>
                            </div>
                            <div className='title-wrapper'>
                                <p>{product.product_name}</p>
                            </div>
                            <p className='product-tile-price'>£{product.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
            <div className='filling-empty-space-childs'></div>
            <div className='filling-empty-space-childs'></div>
            <div className='filling-empty-space-childs'></div>
        </div>
    );
};

export default Category;