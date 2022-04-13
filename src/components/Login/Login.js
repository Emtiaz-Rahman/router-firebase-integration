import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    const handleEmailBlur = (event) => {
        console.log(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
    }
    const handleFormSbmit = event => {
        console.log('from submit')
        event.preventDefault();
    }
    return (
        <div>
            <h4>Please Login</h4>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            <form onSubmit={handleFormSbmit} className='input-form'>
                <input onBlur={handleEmailBlur} name="Email" id="" placeholder='Your Email' required />
                <input onBlur={handlePasswordBlur} name="Password" id="" placeholder='Your Password' required />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;