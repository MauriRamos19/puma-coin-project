import React from 'react'

import './WrapperDirection.css'

const WrapperDirection = ({ children, direction }) => {
    return (
        <div className={`wrapper-direction ${direction}`}>
            {children}
        </div>
    )
}

export default WrapperDirection