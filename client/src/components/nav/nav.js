import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

    const logout = async () => {
        const response = await fetch('/logout');
        const json = await response.json();
        return json;
    }

    return (
        <nav className='nav-bar'>
            <p className='title'>The Football Shop</p>
            <div className='nav-links'>
                <Link to='/login'>
                    <p>Login</p>
                </Link>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </nav>
    );
};

export default Nav;