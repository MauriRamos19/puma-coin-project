import React, { useEffect, useState } from "react";
import cargando from '../../Assets/images/cargando.png'
import puma from '../../Assets/images/puma.png'
import WrapperDirection from "../../Components/WrapperDirection/WrapperDirection";
import InputWithLabel from "../../Components/InputWithLabel/InputWithLabel";
import { useNavigate, useParams } from "react-router-dom";
import unah from "../../Assets/images/unah.png";
import poli from "../../Assets/images/poli.png";
import facultad from "../../Assets/images/facultad.png";
import UNAH_1847 from "../../Assets/images/UNAH_1847(1).png";
import { getInfoAccount, putInfoAccount } from "../../services/settings";

import "./Support.css";
import Button from "../../Components/Button/Button";



const Support = (props) => {


    let { userID } = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name_soporte: '',
        lastName: '',
        img: '',
        asunto: '',
        phone: '',
        address: '',
        address2: '',
        mensaje: '',
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

    const goBack = () => {
        navigate(-1);
    }


    return (
        <div className="Support__pag">
            <div className="Support__first_column_wrapper">
                <div className="Support__title_column_size">
                    <h1>Equipo PumaCoin</h1>
                    <p>Permitenos ayudarte y ponte en contacto con nosotros</p>
                    
				</div>

                <div className="Unah__image">
					<img className="Unah__img_password" src={facultad} />
				</div>

				<div className="Unah__image">
					<img className="Unah__img_puma" src={puma} />
				</div>
                
            <form className="Support__form Support__first_column_wrapper">
                <div className="Support__inputs">
                    <WrapperDirection direction="vertical">
                        <WrapperDirection direction="horizontal">
                        <InputWithLabel label="Escriba su Nombre">
                            <input
                            type="text"
                            name="name_soporte"
                            placeholder="Nombre"
                            onChange={onChangeHandler}
                            value={user.name_soporte}
                            />
                        </InputWithLabel>                                                
                        </WrapperDirection>
                        <InputWithLabel label = "Correo electronico">
                            <input 
                            type="text"
                            name="email"
                            placeholder="correo electronico"
                            onChange={onChangeHandler}
                            value={user.email}
                            />                  
                        </InputWithLabel>
                        <InputWithLabel label = "Asunto">
                            <input 
                            type="text"
                            name="asunto"
                            placeholder="asunto"
                            onChange={onChangeHandler}
                            value={user.asunto}
                            />                  
                        </InputWithLabel>
                        <InputWithLabel label = "Mensaje">
                            <input 
                            type="text"
                            name="mensaje"
                            placeholder=""
                            onChange={onChangeHandler}
                            value={user.mensaje}
                            />                  
                        </InputWithLabel>
                    </WrapperDirection>
                </div>
			     <Button > Enviar </Button>
            </form>
            </div>  
              
		</div>
    )
}

export default Support