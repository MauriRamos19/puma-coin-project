import React from 'react'
import ModalInfo from '../Modals/ModalInfo/ModalInfo';
import ModalLoading from '../Modals/ModalLoading/ModalLoading';


const ModalManagment = ({ isActive, type, title, dispatchModal, ...modalData }) => {

    if (!isActive) return;

    let modal = null;

    if (type !== 'loading')
        modal = (
            <ModalInfo
                onClose={() => dispatchModal({ type: 'close' })}
                type={type}
                headingIcon={modalData.headingIcon}
                title={title}
                description={modalData.description}
            >
                {modalData.content}
            </ModalInfo>
        )
    else
        modal = (
            <ModalLoading
                title={title}
                loader={modalData.loader}
                description={modalData.description}
            ></ModalLoading >
        )


    return modal
}

export default ModalManagment