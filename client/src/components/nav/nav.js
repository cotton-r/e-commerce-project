import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../app/App';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../../styles/nav.css';

const Navigation = ({isLoggedIn}) => {

    const [classname, setClassname] = useState('inner-dropdown');
    
    const toggleInnerDropdown = () => {
        if (classname === 'inner-dropdown') {
            setClassname('inner-dropdown-toggle')
        } else {
            setClassname('inner-dropdown')
        }
    };

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
                    <Link to={{ pathname: '/loginregister', }}>
                        <button><span>Login</span></button>
                    </Link>
                    <p>|</p>
                    <Link to='/loginregister'>
                        <button><span>Sign up</span></button>
                    </Link>
                </div>
            );
        }
    };

    return (
        <div>
            <nav className='nav-bar'>
                <Link to='/'>
                    <h1 className='nav-title'>The Football Shop</h1>
                </Link>
                <div className='nav-menu'>
                    <Link to='/'><span>Home</span></Link>
                    <div className='dropdown'>
                        <button className='dropbtn'><span>Products</span><i class="fi fi-rr-angle-small-down"></i></button>
                        <div className='dropdown-content'>
                            <Link to='/products/boots'><a>Boots</a></Link>
                            <Link to='/products/footballs'><a>Footballs</a></Link>
                            <Link to='/products/kits'><a>Kits</a></Link>
                            <Link to='/products'><a>All products</a></Link>
                        </div>
                    </div>
                    <Link to='/cart'><a className='cart-nav'><span>Cart</span>{sessionStorage.length > 0 ? <p className='cart-count'>{sessionStorage.length}</p> : null}</a></Link>
                </div>
                <div className='nav-links'>
                    {isUserLoggedIn()}                
                </div>
            </nav>

            <Navbar bg='light' expand='lg' id='mobile-nav'>
                <Navbar.Brand href='/'>The Football Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title='Products' id='basic-nav-dropdown'>
                            <NavDropdown.Item>
                                <LinkContainer to="/products/boots">
                                    <Nav.Link>Boots</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to="/products/footballs">
                                    <Nav.Link>Footballs</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to="/products/kits">
                                    <Nav.Link>Kits</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/cart">
                            <Nav.Link>Cart</Nav.Link>
                        </LinkContainer>
                        <Nav.Link>{isUserLoggedIn()}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;