import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

                    <Link
                    to='finish-register-persona'
                    className='Header__account__register'
                    >
                    <Button>
                        Persona
                    </Button>
                </Link>
                </div>
                
                
                
            </form>
        </div>
    )
}

export default FinishRegister