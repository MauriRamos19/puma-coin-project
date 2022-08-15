import React, { useState } from 'react'

import './InputFileWithPreview.css'

const InputFileWithPreview = ({ alt, name, imagePlaceHolder, className, setProfileImage}) => {

    
    const [photo, setPhoto] = useState(imagePlaceHolder)

    const changePhotoHandler = (src) => {
        setPhoto(src)
    }

    const onChangeProfilePhotoHandler = (evt) => {
        
        const fileReader = new FileReader();

        fileReader.readAsDataURL(evt.target.files[0])
        setProfileImage(evt.target.files[0])
        fileReader.onloadend = () => {
            changePhotoHandler(fileReader.result)
            
        }
    }

    return (
        <label className={`InputFileWithPreview ${className}`}>
            <img src={photo} alt={alt} />
            <input
                type="file"
                name={name}
                onChange={onChangeProfilePhotoHandler}
            />
        </label>
    )
}

export default InputFileWithPreview