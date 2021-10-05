import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Login = () => {

    const cookies = new Cookies();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        
        await fetch('/login', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        // get cookie sent from passport.serializeUser()
        const sessionCookie = await cookies.get('currentsession');
    
        // if cookie is present (user logged in) then add to sessionStorage so available globally
        if (sessionCookie) {
            await sessionStorage.setItem('session', 'active');
        };
        window.location.href = '/';
    };

    return (
        <div className='page-container'>
            <h2>Please log in.</h2>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Email Address' 
                            required 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            value={password }
                            placeholder='Password' 
                            required 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p>Don't have an account?</p>
                    <Link to='/register'>
                        <p>Sign up</p>
                    </Link>
                    <div>
                        <button className='form-button' type='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;