import React from 'react'

import './ModalTemplate.css'

const ModalTemplate = ({ className, children, onClose}) => {
    return (
        <div className={`modalTemplate`}>
            <div className='backdrop' onClick={onClose} />
            <div className={`
                body
                ${className}`
            }>
                {children}
            </div>
        </div>
    )
}

export default ModalTemplate