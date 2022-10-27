import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='bg-dark text-white p-5 footer'>
            <p><FaCopyright></FaCopyright> 2022 All Rights Reserved</p>
        </div>
    );
};

export default Footer;