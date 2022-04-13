import React from 'react';
import './Regester.css'

const regester = () => {
    return (
        <div>
            <h4> Please Regester </h4>
            <form className='input-form'>
                <input type="text" placeholder='Your Name' />
                <input type="email" name="Email" id="" placeholder='Your Email' />
                <input type="password" name="Password" id="" placeholder='Your Password' />
                <input type="submit" value="Regester" />
            </form>
        </div>
    );
};

export default regester;