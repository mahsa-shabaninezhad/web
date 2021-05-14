import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({icon, title, classes}) => {
    return (
        <div className="card">
            <div className={classes}>
                <svg className="card-icon">
                    <use href={icon} />
                </svg>
            </div>
            <p className="card-title">{title}</p>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.string
}

export default Card
