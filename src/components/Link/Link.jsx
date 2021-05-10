import PropTypes from 'prop-types'
import React from 'react'
import './Link.css'

const Link = ({address, text, theme= ''}) => {
    return (
        <a className={`nav-link ${theme}`} href={address}>
            {text}
        </a>
    )
}

Link.propTypes = {
    address: PropTypes.string,
    text: PropTypes.string,
    theme: PropTypes.string
}

export default Link
