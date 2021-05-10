import React from 'react';
import brand from './footerLogo.png'
import './Logo.css'

const Logo = () => {
    return (
        <a href='#'>
            <img src={brand} alt='BEHINE' className='logo'/>
        </a>
    )
}

export default Logo
