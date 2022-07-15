import React from 'react'

import './Message.css'

const Message = ({ type, message, className }) => {
    return (
        <div className={`Message ${type} ${className}`}>
            {message}
        </div>
    )
}

export default Message