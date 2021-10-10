import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../app/App';

import '../../styles/nav.css';

const Nav = ({isLoggedIn}) => {

    const logout = async () => {
        await fetch('/logout', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
        })
        window.location.href = '/';
        sessionStorage.removeItem('session');
    };

    const isUserLoggedIn = () => {
        if (isLoggedIn) {
            return <button onClick={() => logout()}><span>Logout</span></button>
        } else {
            return (
                <div className='nav-links'>
                    <Link to='/login'>
                        <button><span>Login</span></button>
                    </Link>
                    <p>|</p>
                    <Link to='/register'>
                        <button><span>Sign up</span></button>
                    </Link>
                </div>
            );
        }
    };

    return (
        <nav className='nav-bar'>
            <Link to='/'>
                <h1 className='nav-title'>The Football Shop</h1>
            </Link>
            <div className='nav-menu'>
                <div className='dropdown'>
                    <button className='dropbtn'><span>Products</span><i class="fi fi-rr-angle-small-down"></i></button>
                    <div className='dropdown-content'>
                        <Link to='/products/boots'><a>Boots</a></Link>
                        <Link to='/products/footballs'><a>Footballs</a></Link>
                        <Link to='/products/kits'><a>Kits</a></Link>
                        <Link to='/products'><a>All products</a></Link>
                    </div>
                </div>
                <Link to='/'><a><span>About us</span></a></Link>
                <Link to='/cart'><a><span>Cart</span></a></Link>
            </div>
            <div className='nav-links'>
                {isUserLoggedIn()}                
            </div>
        </nav>
    );
};

export default Nav;