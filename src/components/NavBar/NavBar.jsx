import React,{useState} from 'react'
import Link from '../Link/Link'
import Logo from '../Logo/Logo'
import './NavBar.css'

const NavBar = () => {
    const [toggle, setToggle]=useState('toggle toggle--hide')
    
    const handleToggleChange = () =>{
        toggle === 'toggle'?
        setToggle('toggle toggle--hide'):
        setToggle('toggle')
        
    }

    return (
        <nav className="nav-bar">
            <Logo />
            <span className='toggle-icon' onClick={handleToggleChange}>&#9776;</span>
            <div className={toggle}>
                <Link address='#' text='درباره ما'/>
                <Link address='#' text='کسب و کار'/>
                <Link address='#' text='پشتیبانی'/>
                <Link address='#' text='سوالات متداول'/>
                <Link address='#' text='فروشگاه من' theme='btn' />
            </div>
        </nav>
    )
}

export default NavBar
