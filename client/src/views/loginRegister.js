import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const LoginRegister = () => {

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
        <div className='container' id='container'>
            <div className='form-container sign-up-container'>
                <h2>Sign up for an account.</h2>
                <div className='form-container'>
                    <form method='POST' action='/register'>
                        <div>
                            <input type='text' id='name' name='name' placeholder='Name' required />
                        </div>
                        <div>
                            <input type='email' id='email' name='email' placeholder='Email Address' required />
                        </div>
                        <div>
                            <input type='password' id='password' name='password' placeholder='Password' required />
                        </div>
                        <div>
                            <input type='password' id='password2' name='password2' placeholder='Confirm password' required />
                        </div>
                        <div>
                            <button className='form-button' type='submit'>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='form-container sign-in-container'>
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
            <div className='overlay-container'>
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            To use your existing details please login
                        </p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details to register</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;