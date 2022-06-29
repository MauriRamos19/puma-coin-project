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
                    <h1>Tipo de Cuenta</h1>
                    <p>Necesitamos un poco más de información sobre usted solo para proteger su cuenta.</p>
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
                            <InputWithLabel label="Nombre de la Empresa">
                                <input
                                    type="text"
                                    name="nombre_empresa"
                                    placeholder="Escriba el nombre de la Empresa" />
                            </InputWithLabel>
                            <InputWithLabel label="RTN">
                                <input
                                    type="text"
                                    name="rtn"
                                    placeholder="Escriba su RTN" />
                            </InputWithLabel>
                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">                            
                            <InputWithLabel label="Telefono">
                                <input
                                    type="text"
                                    name="telefono"
                                    placeholder="Escriba su Telefono" />
                            </InputWithLabel>
                        </WrapperDirection>

                        <InputWithLabel label="Dirección 1">
                            <input
                                type="text"
                                name="direccion1"
                                placeholder="Escriba su Dirección 1" />
                        </InputWithLabel>

                        <InputWithLabel label="Dirección 2">
                            <input
                                type="text"
                                name="direccion2"
                                placeholder="Escriba su Direccion 2" />
                        </InputWithLabel>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Pais">
                                <input
                                    type="text"
                                    name="pais"
                                    placeholder="Escriba su País" />
                            </InputWithLabel>
                            <InputWithLabel label="Departamento">
                                <input
                                    type="text"
                                    name="departamento"
                                    placeholder="Escriba su Departamento" />
                            </InputWithLabel>
                            
                            
                        </WrapperDirection>
                        
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Ciudad">
                                <input
                                    type="text"
                                    name="ciudad"
                                    placeholder="Escriba su Ciudad" />
                            </InputWithLabel>
                            <InputWithLabel label="Codigo Postal">
                                <input
                                    type="text"
                                    name="codigopostal"
                                    placeholder="Escriba su Codigo Postal" />
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

export default FinishRegister