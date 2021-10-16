import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import '../styles/loginRegister.css';

const LoginRegister = () => {

    const [isSignUp, setSignUp] = useState(true);

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
        <div className='login-main-wrapper'>
            <div className={isSignUp ? 'container right-panel-active' : 'container'} id='container'>
                <div className='form-container sign-up-container'>
                    <div className='form-container'>
                        <form method='POST' action='/register'>
                            <h2>Register</h2>
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
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h2>Sign in</h2>
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
                            <div>
                                <button className='form-button' type='submit'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='overlay-container'>
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details to register
                                <br/><br/>
                                Already have an account? Sign in below
                            </p>
                            <button 
                                className="ghost" 
                                id="signIn"
                                onClick={() => setSignUp(false)}
                            >Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>To use your existing details please login
                                <br/><br/>
                                Don't have an account? Sign up below!
                            </p>
                            <button 
                                className="ghost" 
                                id="signUp"
                                onClick={() => setSignUp(true)}
                            >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;