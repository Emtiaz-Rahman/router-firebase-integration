import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h4>This is Home</h4>
            <p>Current User:{user ? user.displayName : 'No Body'}</p>
        </div>
    );
};

export default Home;