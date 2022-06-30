import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import imagePlaceHolder from '../../Assets/images/userImagePlaceHolder.png'
import Button from '../../Components/Button/Button'
import InputFileWithPreview from '../../Components/InputFileWithPreview/InputFileWithPreview'
import InputWithLabel from '../../Components/InputWithLabel/InputWithLabel'
import Select from '../../Components/Select/Select'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import { finishRegister } from '../../services/auth'

import './FinishRegisterPersona.css'

const sexOptions = [
    { id: "m", value: "Masculino" },
    { id: "f", value: "Femenino" },
    { id: "o", value: "Otro" }
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
        primer_nombre: '',
        apellido: '',
        img: '',
        sex: sexOptions[0].value,
        telefono: '',
        direccion1: '',
        direccion2: '',
        pais: '',
        departamento: '',
        ciudad: '',
        codigopostal: '',
        userType: 'natural'
    });
    
    const onChangeHandler = (evt) => {

        const propery = evt.currentTarget.name;
        const value = evt.currentTarget.value;

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


    return (
        <div className="FinishRegister">
            <form className="FinishRegister__form" onSubmit={onSubmitForm}>
                <div className="FinishRegister__header">
                    <h1>Tipo de Cuenta</h1>
                    <p>Necesitamos un poco más de información sobre usted solo para proteger su cuenta.</p>
                </div>
                <div className="FinishRegister__photo">
                    <InputFileWithPreview
                        name="img"
                        alt="img"
                        imagePlaceHolder={imagePlaceHolder}
                        onChange={onChangeHandler}
                        value={user.img}
                    />
                </div>
                <div className="FinishRegister__inputs">
                    <WrapperDirection direction="vertical">
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Primer Nombre">
                                <input
                                    type="text"
                                    name="primer_nombre"
                                    placeholder="Escriba su primer Nombre"
                                    onChange={onChangeHandler}
                                    value={user.primer_nombre} />
                            </InputWithLabel>
                            <InputWithLabel label="Apellido">
                                <input
                                    type="text"
                                    name="apellido"
                                    placeholder="Escriba su Apellido"
                                    onChange={onChangeHandler}
                                    value={user.apellido} />
                            </InputWithLabel>
                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Genero">
                                <Select
                                    options={sexOptions}
                                    name="sex"
                                    onChange={onChangeHandler}
                                    value={user.sex} />
                            </InputWithLabel>
                            <InputWithLabel label="Telefono">
                                <input
                                    type="text"
                                    name="telefono"
                                    placeholder="Escriba su Telefono"
                                    onChange={onChangeHandler}
                                    value={user.telefono} />
                            </InputWithLabel>
                        </WrapperDirection>

                        <InputWithLabel label="Dirección 1">
                            <input
                                type="text"
                                name="direccion1"
                                placeholder="Escriba su Dirección 1"
                                onChange={onChangeHandler}
                                value={user.direccion1} />
                        </InputWithLabel>

                        <InputWithLabel label="Dirección 2">
                            <input
                                type="text"
                                name="direccion2"
                                placeholder="Escriba su Direccion 2"
                                onChange={onChangeHandler}
                                value={user.direccion2} />
                        </InputWithLabel>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Pais">
                                <input
                                    type="text"
                                    name="pais"
                                    placeholder="Escriba su País"
                                    onChange={onChangeHandler}
                                    value={user.pais} />
                            </InputWithLabel>
                            <InputWithLabel label="Departamento">
                                <input
                                    type="text"
                                    name="departamento"
                                    placeholder="Escriba su Departamento"
                                    onChange={onChangeHandler}
                                    value={user.departamento} />
                            </InputWithLabel>


                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Ciudad">
                                <input
                                    type="text"
                                    name="ciudad"
                                    placeholder="Escriba su Ciudad"
                                    onChange={onChangeHandler}
                                    value={user.ciudad} />
                            </InputWithLabel>
                            <InputWithLabel label="Codigo Postal">
                                <input
                                    type="text"
                                    name="codigopostal"
                                    placeholder="Escriba su Codigo Postal"
                                    onChange={onChangeHandler}
                                    value={user.codigopostal} />
                            </InputWithLabel>
                        </WrapperDirection>
                    </WrapperDirection>
                </div>
                <div className="FinishRegister__submit-button">
                    <Button type="submit">Finalizar!</Button>
                </div>
            </form>
        </div>
    )
}

export default FinishRegisterPersona