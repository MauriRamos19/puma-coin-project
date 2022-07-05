import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import imagePlaceHolder from '../../Assets/images/userImagePlaceHolder.png'
import Button from '../../Components/Button/Button'
import InputFileWithPreview from '../../Components/InputFileWithPreview/InputFileWithPreview'
import InputWithLabel from '../../Components/InputWithLabel/InputWithLabel'
import Select from '../../Components/Select/Select'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import { finishRegister } from '../../services/auth'

import './FinishRegisterPersona.css'

const sexOptions = [
    { id: "m", value: "masculino", option: "Masculino" },
    { id: "f", value: "femenino", option: "Femenino" },
    { id: "o", value: "otro", option: "Otro" }
]

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

const FinishRegisterPersona = (props) => {


    let { userID } = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        img: '',
        gender: sexOptions[0].value,
        phone: '',
        address: '',
        address2: '',
        country: '',
        department: '',
        city: '',
        zipCode: '',
        userType: 'natural'
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

        const isUpdated = await finishRegister(userID, user);
        console.log("isUpdated", isUpdated);

        if (isUpdated === true)
            navigate("/")
    }

    const goBack = () => {
        navigate(-1);
    }


    return (
        <div className="FinishRegisterPersona">
            <form className="FinishRegisterPersona__form" onSubmit={onSubmitForm}>
                <div className="FinishRegisterPersona__header">
                    <h1>Perfil Persona Natural</h1>
                    <p>Necesitamos un poco más de información sobre usted solo para proteger su cuenta.</p>
                </div>
                <div className="FinishRegisterPersona__photo">
                    <InputFileWithPreview
                        name="img"
                        alt="img"
                        imagePlaceHolder={imagePlaceHolder}
                        onChange={onChangeHandler}
                        value={user.img}
                    />
                </div>
                <div className="FinishRegisterPersona__inputs">
                    <WrapperDirection direction="vertical">
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Primer Nombre">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Escriba su primer Nombre"
                                    onChange={onChangeHandler}
                                    value={user.name} />
                            </InputWithLabel>
                            <InputWithLabel label="Apellido">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Escriba su Apellido"
                                    onChange={onChangeHandler}
                                    value={user.lastName} />
                            </InputWithLabel>
                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Genero">
                                <Select
                                    options={sexOptions}
                                    name="gender"
                                    onChange={onChangeHandler}
                                    value={user.gender} />
                            </InputWithLabel>
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
                <div className="FinishRegisterPersona__submit-button">
                    <Button type="submit">Finalizar!</Button>
                </div>
            </form>
            <div className="FinishRegisterPersona__back">
                <button type="button" onClick={goBack}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                    <span>Retroceder</span>
                </button>
            </div>
        </div>
    )
}

export default FinishRegisterPersona