import React from 'react';

const Login = () => {
    return (
        <div>
            <h4>Please  login </h4>
            <form className='btn-input'>
                <button>Google Sign in</button>
                <input type="email" name="" id="" placeholder='Your Email' />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;