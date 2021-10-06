import React, { useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const hover = () => {
        document.getElementById('page').style={boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2)'};     
    }

    return (
        <div className='homepage-container' id='page'>
            <div className='all-products-tile'>
                <Link to='/products'>
                    <button className='home-button' onMouseEnter={hover}><span>View Products</span></button>
                </Link>
            </div>
            <div className='other-tiles'>
                <div className='boots-tile sub-tile'>
                    <Link to='/products/boots'>
                        <button className='home-button' onMouseEnter={hover}><span>Boots</span></button>
                    </Link>
                </div>
                <div className='footballs-tile sub-tile'>
                    <Link to='/products/footballs'>
                        <button className='home-button' onMouseEnter={hover}><span>Footballs</span></button>
                    </Link>
                </div>
                <div className='kits-tile sub-tile'>
                    <Link to='/products/kits'>
                        <button className='home-button' onMouseEnter={hover}><span>Kits</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;