import React from 'react'
import './Button.css'

const Button = ({ className, children, onClick, type }) => {
    return (
        <button 
            className={`UI-button ${className}`} 
            onClick={onClick}
            type={type || 'button'}
        >
            {children}
        </button>
    )
}

export default Button