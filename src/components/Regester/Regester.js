import React from 'react';
import './Regester.css'

const Regester = () => {
    return (
        <div>
            <h4>Please  Regester Now </h4>
            <form className='btn-input'>
                
                <input type="text" placeholder='Your Name' />
                <input type="email" name="" id="" placeholder='Your Email' />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <input type="submit" value="Regester" />
            </form>
        </div>
    );
};

export default Regester;