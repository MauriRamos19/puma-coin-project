import React, { useState } from 'react'

import imagePlaceHolder from '../../Assets/images/userImagePlaceHolder.png'
import Button from '../../Components/Button/Button'
import InputContainer from '../../Components/InputContainer/InputContainer'
import InputFileWithPreview from '../../Components/InputFileWithPreview/InputFileWithPreview'
import InputWithLabel from '../../Components/InputWithLabel/InputWithLabel'
import Select from '../../Components/Select/Select'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import './FinishRegister.css'

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

const FinishRegister = (props) => {
    return (
        <div className="FinishRegister">
            <form className="FinishRegister__form">
                <div className="FinishRegister__header">
                    <h1>¡Ya casi finalizamos!</h1>
                    <p>Necesitamos tu información para tú seguridad, así podrás adquirir tus PUMA</p>
                </div>
                <div className="FinishRegister__photo">
                    <InputFileWithPreview
                        name="profilePhoto"
                        alt="profilePhoto"
                        imagePlaceHolder={imagePlaceHolder}
                    />
                </div>
                <div className="FinishRegister__inputs">
                    <WrapperDirection direction="vertical">
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Nombre">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Escribe tu nombre" />
                            </InputWithLabel>
                            <InputWithLabel label="Apellido">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Escribe tus apellidos" />
                            </InputWithLabel>
                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Sexo">
                                <Select
                                    options={sexOptions}
                                    name="sex" />
                            </InputWithLabel>
                            <InputWithLabel label="Teléfono">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Escribe tu teléfono" />
                            </InputWithLabel>
                        </WrapperDirection>

                        <InputWithLabel label="Dirección Principal">
                            <input
                                type="text"
                                name="address1"
                                placeholder="Escribe tu dirección principal" />
                        </InputWithLabel>

                        <InputWithLabel label="Dirección 2">
                            <input
                                type="text"
                                name="address2"
                                placeholder="Escribe tu dirección, casa, lote, ave." />
                        </InputWithLabel>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="País">
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Escribe tu país" />
                            </InputWithLabel>
                            <InputWithLabel label="Departamento">
                                <input
                                    type="text"
                                    name="department"
                                    placeholder="Escribe tu Departamento" />
                            </InputWithLabel>
                            
                            
                        </WrapperDirection>
                        
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Ciudad">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Escribe tu ciudad" />
                            </InputWithLabel>
                            <InputWithLabel label="Código Postal">
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="Ingresa el código postal" />
                            </InputWithLabel>
                        </WrapperDirection>
                    </WrapperDirection>
                </div>
                <div className="FinishRegister__submit-button">
                    <Button type="submit">¡Finalizar!</Button>
                </div>
            </form>
        </div>
    )
}

export default FinishRegister