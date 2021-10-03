import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className='nav-bar'>
            <p className='title'>The Football Shop</p>
            <div className='nav-links'>
                <Link to='/login'>
                    <p>Login</p>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;