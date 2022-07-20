import React from 'react'

import './WrapperDirection.css'

const WrapperDirection = ({ children, direction, className }) => {
    return (
        <div className={`wrapper-direction ${direction} ${className}`}>
            {children}
        </div>
    )
}

export default WrapperDirection