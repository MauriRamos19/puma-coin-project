import React from 'react'
import './ButtonWhite.css'

const ButtonWhite = ({ className, children, onClick, type }) => {
    return (
        <button 
            className={`UI-buttonWhite ${className}`} 
            onClick={onClick}
            type={type || 'button'}
        >
            {children}
        </button>
    )
}

export default ButtonWhite