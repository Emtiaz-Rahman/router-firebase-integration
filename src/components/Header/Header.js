import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../../hooks/useFireBase';
import './Header.css'


const Header = () => {
    const { user,handleSignOut } = useFireBase();
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/order">Order</Link>
                <Link to="/regester">Regester</Link>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid
                 ?
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <Link to="/login">Login</Link>
                }

            </nav>

        </div>
    );
};

export default Header;