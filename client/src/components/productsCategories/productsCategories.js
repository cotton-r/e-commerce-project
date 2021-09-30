import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategoryProducts, selectCategoryProducts } from './categoriesSlice';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const ProductsCategories = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectCategoryProducts);
    const params = useParams();
    const category = params.category;

    // load all products from database
    useEffect(() => {
        dispatch(loadCategoryProducts(category));
    }, [dispatch]);

    // create variable for each category of product
    const boots = products.filter((product) => product.category_name === 'boots');
    const footballs = products.filter((product) => product.category_name === 'footballs');
    const kits = products.filter((product) => product.category_name === 'kits');

    
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

export default ProductsCategories;