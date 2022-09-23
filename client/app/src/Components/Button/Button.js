import React from 'react'
import './Button.css'

const Button = ({ className, children, onClick, type, disabled }) => {
    return (
        <button disabled={disabled}
            className={`UI-button ${className}`} 
            onClick={onClick}
            type={type || 'button'}
        >
            {children}
        </button>
    )
}

export default Button