import React from 'react';
import { Link } from "react-router-dom"
import useFirebase from '../../CoustomHooks/useFirebase';

import "./Header.css"

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header-part'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/regester">Regester</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut} >SignOut</button>
                        :
                        <Link to="/login">Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;