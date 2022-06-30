import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import moneda from '../../Assets/images/moneda.png'
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

    let { userID } = useParams();

    return (
        <div className="FinishRegister">
            <div className="FinishRegister__form">
                <div className="FinishRegister__header">
                    <div className="Home__first_column_wrapper">

                        {/* <div className="FinishRegister__image">
                            <img className='FinishRegister__img_coin' src={moneda} />
                        </div> */}

                        <div className="myDIVRegister">
                            <div className="FinishRegister__box_title">
                                <h1>Tipo de Cuenta</h1>
                                <p>Necesitamos un poco más de información sobre usted solo para proteger su cuenta.</p>
                            </div>
                            <div>
                                <div className="FinishRegister__form">
                                    <WrapperDirection direction="vertical">
                                        <WrapperDirection direction="horizontal">
                                            <Link
                                                to={'/finish-register-persona/' + userID}
                                                className='Header__account__register'
                                            >
                                                <Button>
                                                    Personal
                                                </Button>

                                            </Link>
                                        </WrapperDirection>
                                    </WrapperDirection>

                                    <WrapperDirection direction="vertical">
                                        <WrapperDirection direction="horizontal">
                                            <Link
                                                to={'/finish-register-company/' + userID}
                                                className='Header__account__register'
                                            >
                                                <Button>
                                                    Empresarial
                                                </Button>
                                            </Link>
                                        </WrapperDirection>
                                    </WrapperDirection>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishRegister