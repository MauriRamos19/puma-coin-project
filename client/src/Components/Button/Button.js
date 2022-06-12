import React from 'react'
import './Button.css'

const Button = ({ className, children, onClick }) => {
    return (
        <button 
            className={`UI-button ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button