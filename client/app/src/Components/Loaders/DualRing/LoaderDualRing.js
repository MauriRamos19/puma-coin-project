import React from 'react'

import './loaderDualRing.css'

const LoaderDualRing = ({ color, className }) => {
    return (
        <div
            className={`lds-dual-ring ${className ?? ''}`}
            style={{ '--color': color }}
        ></div>
    )
}

export default LoaderDualRing