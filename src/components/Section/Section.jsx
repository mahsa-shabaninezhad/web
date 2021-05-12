import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Section.css'


const Section = ({headerText, children, theme=''}) => {
    return (
        <section className={`section ${theme}`}>
            <h1 className="section-header">{headerText}</h1>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

Section.propTypes = {
    headerText: PropTypes.string,
    children: PropTypes.array,
    theme: PropTypes.string
}

export default Section
