import React, { useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const hover = () => {
        document.getElementById('page').style={boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2)'};     
    }

    return (
        <div className='homepage-container' id='page'>
            <div className='layer'>
                <Link to='/products'>
                    <button className='home-button' onMouseEnter={hover}><span>View Products</span></button>
                </Link>
            </div>
        </div>
    );
};

export default Home;