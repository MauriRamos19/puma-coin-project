import React from 'react'

import './InputWithLabel.css'

const InputWithLabel = ({ label, className, children }) => {
    return (
        <label className={`input-with-label ${className ?? ''}`}>
            <span>{label}</span>
            {children}
        </label>
    )
}

export default InputWithLabel