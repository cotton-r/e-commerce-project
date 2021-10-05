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
            return <button onClick={() => logout()}>Logout</button>
        } else {
            return (
                <div className='nav-links'>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button>Sign up</button>
                    </Link>
                </div>
            );
        }
    };

    return (
        <nav className='nav-bar'>
            <p className='title'>The Football Shop</p>
            <div>
                {isUserLoggedIn()}                
            </div>
        </nav>
    );
};

export default Nav;