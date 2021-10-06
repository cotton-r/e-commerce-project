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
            <div className='nav-links'>
                {isUserLoggedIn()}                
            </div>
        </nav>
    );
};

export default Nav;