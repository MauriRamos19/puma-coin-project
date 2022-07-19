import React from 'react'
import ModalTemplate from '../ModalTemplate/ModalTemplate'

import './modalLoading.css'

const ModalLoading = ({ children, title, description, loader }) => {
    return (
        <ModalTemplate
            className={`modalLoading`}
        >
            {loader}
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

export default ModalLoading