import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <link to='/login'>Login</link>
        </div>
    );
};

export default Header;