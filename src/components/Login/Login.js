import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
            <h4>Please Login</h4>
            <button onClick={() => signInWithGoogle()}>Google Sign in</button>
            <form className='input-form'>
                <input type="email" name="Email" id="" placeholder='Your Email' />
                <input type="password" name="Password" id="" placeholder='Your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;