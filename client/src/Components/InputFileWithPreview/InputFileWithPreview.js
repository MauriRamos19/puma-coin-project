import React, { useState } from 'react'

import './InputFileWithPreview.css'

const InputFileWithPreview = ({ alt, name, imagePlaceHolder, className }) => {

    const [photo, setPhoto] = useState(imagePlaceHolder)

    const changePhotoHanlder = (src) => {
        setPhoto(src)
    }

    const onChangeProfilePhotoHandler = (evt) => {
        
        const fileReader = new FileReader();

        fileReader.addEventListener("load",
            evt => changePhotoHanlder(fileReader.result))

        fileReader.readAsDataURL(evt.target.files[0])
    }

    return (
        <label className={`InputFileWithPreview ${className}`}>
            <img src={photo} alt={alt} />
            <input
                type="file"
                name={name}
                onChange={onChangeProfilePhotoHandler} />
        </label>
    )
}

export default InputFileWithPreview