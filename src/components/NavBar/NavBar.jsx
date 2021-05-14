import React,{useState} from 'react'
import Link from '../Link/Link'
import Logo from '../Logo/Logo'
import './NavBar.css'

const NavBar = () => {
    const [toggle, setToggle] = useState('toggle toggle--hide')
    const [activeLink, setActiveLink] = useState('2')

    const handleActiveLink = (e, id) => {
        e.preventDefault()
        setActiveLink(id)
    }

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
                <Link id="1" address='#' role="nav-link" activeItem={activeLink} onClick={handleActiveLink}>درباره ما</Link>
                <Link id="2" address='#' role="nav-link" activeItem={activeLink} onClick={handleActiveLink}>کسب و کار</Link>
                <Link id="3" address='#' role="nav-link" activeItem={activeLink} onClick={handleActiveLink}>پشتیبانی</Link>
                <Link id="4" address='#' role="nav-link" activeItem={activeLink} onClick={handleActiveLink}>سوالات متداول</Link>
                <Link id="5" address='#' role='btn'>فروشگاه من</Link>
            </div>
        </nav>
    )
}

export default NavBar
