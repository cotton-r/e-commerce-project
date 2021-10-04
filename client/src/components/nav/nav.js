import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

    const logout = async () => {
        await fetch('/logout', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        });
    }

    return (
        <nav className='nav-bar'>
            <p className='title'>The Football Shop</p>
            <div className='nav-links'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </nav>
    );
};

export default Nav;