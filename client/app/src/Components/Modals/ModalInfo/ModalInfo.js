// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CloseXButton from '../../CloseXButton/CloseXButton'
import ModalTemplate from '../ModalTemplate/ModalTemplate'

import './modalInfo.css'

const ModalInfo = ({ children, onClose, title, description, type, headingIcon }) => {

    const headerIcon = function () {

        if (!headingIcon) return false;

        let icon = "";

        if (typeof headingIcon == "string")
            icon = <FontAwesomeIcon icon={`fa-solid ${headingIcon}`} className="heading_icon" />
        
        if (typeof headingIcon != "string")
            icon = headingIcon

        return icon;
    }

    return (
        <ModalTemplate
            onClose={onClose}
            className={`modalInfo ${type}`}
        >
            <CloseXButton onClick={onClose} />
            {headingIcon && headerIcon()}
            <h4 className="title">{title}</h4>
            <p className="description">{description}</p>
            {children &&
                <div className="modal_content">
                    {children}
                </div>
            }
        </ModalTemplate>
    )
}

export default ModalInfo