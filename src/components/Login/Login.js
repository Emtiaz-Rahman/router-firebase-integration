import React from 'react';
import useFireBase from '../../hooks/useFireBase';

const Login = () => {
    const {signInWithGoogle }=useFireBase();
    return (
        <div>
            <h4>Please  login </h4>
            <button onClick={signInWithGoogle}>Google Sign in</button>
            <form className='btn-input'>
               
                <input type="email" name="" id="" placeholder='Your Email' />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;