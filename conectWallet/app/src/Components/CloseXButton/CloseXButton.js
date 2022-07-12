// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './CloseXButton.css'

const CloseXButton = ({ className, onClick, faIcon }) => {
    return (
        // <FontAwesomeIcon
        //     className={`close_btn ${className}`}
        //     icon={`fa-solid ${faIcon ?? "fa-circle-xmark"}`}
        //     onClick={onClick} />
        <div
            className={`close_btn ${className}`}
            icon={`fa-solid ${faIcon ?? "fa-circle-xmark"}`}
            onClick={onClick} >x</div>
    )
}

export default CloseXButton