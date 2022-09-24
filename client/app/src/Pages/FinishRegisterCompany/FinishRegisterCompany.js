import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import imagePlaceHolder from '../../Assets/images/userImagePlaceHolder.png'
import Button from '../../Components/Button/Button'
import InputFileWithPreview from '../../Components/InputFileWithPreview/InputFileWithPreview'
import InputWithLabel from '../../Components/InputWithLabel/InputWithLabel'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import { finishRegister } from '../../services/auth'

import './FinishRegisterCompany.css'

const departmentsOptions = [
    { id: "Atlántida", value: "Atlántida" },
    { id: "Choluteca", value: "Choluteca" },
    { id: "Colón", value: "Colón" },
    { id: "Copán", value: "Copán" },
    { id: "Cortés", value: "Cortés" },
    { id: "El Paraíso", value: "El Paraíso" },
    { id: "Francisco Morazán", value: "Francisco Morazán" },
    { id: "Gracias a Dios", value: "Gracias a Dios" },
    { id: "Intibucá", value: "Intibucá" },
    { id: "Islas de la Bahía", value: "Islas de la Bahía" },
    { id: "La Paz", value: "La Paz" },
    { id: "Lempira", value: "Lempira" },
    { id: "Ocotepeque", value: "Ocotepeque" },
    { id: "Olancho", value: "Olancho" },
    { id: "Santa Bárbara", value: "Santa Bárbara" },
    { id: "Valle", value: "Valle" },
    { id: "Yoro", value: "Yoro" },
]

const FinishRegisterCompany = (props) => {

    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState({});

    let { userID } = useParams();
    const [user, setUser] = useState({
        name: '',
        img: 'https://res.cloudinary.com/dzv5rmys1/image/upload/v1663977621/userImagePlaceHolder_dj1cqf.png',
        RTN: '',
        phone: '',
        address: '',
        address2: '',
        country: '',
        department: '',
        city: '',
        zipCode: '',
        userType: 'company'
    });

    const onChangeHandler = (evt) => {

        const propery = evt.target.name;
        const value = evt.target.value;

        setUser(prev => Object.assign({}, {
            ...prev,
            [propery]: value
        }));
    }

    const onSubmitForm = async (evt) => {

        evt.preventDefault();

      
        const formData = new FormData()
        // 
 
        Object.entries(user).forEach(atributte => {
            formData.append(atributte[0].toString(),atributte[1])
        })
       
     
        
        const isUpdated = await finishRegister(userID, formData);

        console.log("isUpdated", isUpdated);

        if (isUpdated === true) navigate("/")
    }
    

    const goBack = () => {
        navigate(-1);
    }

    const changePhotoHandler = (src) => {
        setProfileImage(src)
    }

    const onChangeProfilePhotoHandler = (evt) => {

        const fileReader = new FileReader();

        fileReader.readAsDataURL(evt.target.files[0])
        setProfileImage(evt.target.files[0])
        setUser((prev) =>
            Object.assign(
                {},
                {
                    ...prev,
                    img: evt.target.files[0]
                }
            )
        );
        fileReader.onloadend = () => {
            changePhotoHandler(fileReader.result)

        }
    }
   
    return (
        <div className="FinishRegisterCompany">
            <form className="FinishRegisterCompany__form" onSubmit={onSubmitForm}>
                <div className="FinishRegisterCompany__header">
                    <h1>Perfil Empresa</h1>
                    <p>Necesitamos un poco más de información sobre su empresa, para proteger su cuenta.</p>
                </div>
                <div className="FinishRegisterCompany__photo">
                    <label className={`InputFileWithPreview`}>
                        <img src={Object.keys(profileImage).length === 0 ? "https://res.cloudinary.com/dzv5rmys1/image/upload/v1663977621/userImagePlaceHolder_dj1cqf.png" : profileImage} alt={'img'} />
                        <input
                            type="file"
                            name={'img'}
                            onChange={onChangeProfilePhotoHandler}
                        />
                    </label>
                </div>
                <div className="FinishRegisterCompany__inputs">
                    <WrapperDirection direction="vertical">
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Nombre de la Empresa">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Escriba el nombre de la Empresa"
                                    onChange={onChangeHandler}
                                    value={user.name} />
                            </InputWithLabel>
                            <InputWithLabel label="RTN">
                                <input
                                    type="text"
                                    name="RTN"
                                    placeholder="Escriba su RTN"
                                    onChange={onChangeHandler}
                                    value={user.RTN} />
                            </InputWithLabel>
                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Telefono">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Escriba su Telefono"
                                    onChange={onChangeHandler}
                                    value={user.phone} />
                            </InputWithLabel>
                        </WrapperDirection>

                        <InputWithLabel label="Dirección 1">
                            <input
                                type="text"
                                name="address"
                                placeholder="Escriba su Dirección 1"
                                onChange={onChangeHandler}
                                value={user.address} />
                        </InputWithLabel>

                        <InputWithLabel label="Dirección 2">
                            <input
                                type="text"
                                name="address2"
                                placeholder="Escriba su Direccion 2"
                                onChange={onChangeHandler}
                                value={user.address2} />
                        </InputWithLabel>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Pais">
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Escriba su País"
                                    onChange={onChangeHandler}
                                    value={user.country} />
                            </InputWithLabel>
                            <InputWithLabel label="Departamento">
                                <input
                                    type="text"
                                    name="department"
                                    placeholder="Escriba su Departamento"
                                    onChange={onChangeHandler}
                                    value={user.department} />
                            </InputWithLabel>


                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Ciudad">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Escriba su Ciudad"
                                    onChange={onChangeHandler}
                                    value={user.city} />
                            </InputWithLabel>
                            <InputWithLabel label="Codigo Postal">
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="Escriba su Codigo Postal"
                                    onChange={onChangeHandler}
                                    value={user.zipCode} />
                            </InputWithLabel>
                        </WrapperDirection>
                    </WrapperDirection>
                </div>
                <div className="FinishRegisterCompany__submit-button">
                    <Button type="submit">¡Finalizar!</Button>
                </div>
            </form>
            <div className="FinishRegisterCompany__back">
                <button type="button" onClick={goBack}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                    <span>Retroceder</span>
                </button>
            </div>
        </div>
    )
}

export default FinishRegisterCompany