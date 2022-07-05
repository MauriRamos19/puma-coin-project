import React from 'react'

import './LoaderEllipsis.css'

const LoaderEllipsis = ({ color, className }) => {
    return (
        <div
            className={`lds-ellipsis ${className ?? ''}`}
            style={{ '--color': color }}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default LoaderEllipsis