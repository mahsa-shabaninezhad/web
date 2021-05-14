import PropTypes from 'prop-types'
import React from 'react'
import './Link.css'

const Link = ({address, children, role= '', activeItem = "0", onClick, id}) => {
    let className = activeItem === id ? `${role} ${role}--active` : role

    return (
        <a className={className} href={address} onClick={(e) => onClick(e,id)}>
            {children}
        </a>
    )
}

Link.propTypes = {
    address: PropTypes.string,
    role: PropTypes.oneOf(['card-link', 'nav-link', 'btn']),
    children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
    activeItem: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func
}

export default Link
