import React from 'react';

const Register = () => {
    return (
        <div className='register-container'>
            <h2>Sign up for an account.</h2>
            <div className='register-form-container'>
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
    );
};

export default Register;