import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='page-container'>
            <h2>Please log in.</h2>
            <div className='form-container'>
                <form method='POST' action='/login'>
                    <div>
                        <input type='email' id='email' name='email' placeholder='Email Address' required />
                    </div>
                    <div>
                        <input type='password' id='password' name='password' placeholder='Password' required />
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