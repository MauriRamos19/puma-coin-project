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

import { sendEmail } from "../../services/support";



const Support = (props) => {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const onChangeHandler = (evt) => {

        const propery = evt.target.name;
        const value = evt.target.value;

        setForm(prev => Object.assign({}, {
            ...prev,
            [propery]: value
        }));
    }

    const goBack = () => {
        navigate(-1);
    }

    const handleSendEmail = async () => {
        try {
            const data = await sendEmail(form);
        
            if (data) {
                alert('Mensaje enviado');
            }
        } catch (error) {
            console.log(error);
        }
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
                            name="name"
                            placeholder="Nombre"
                            onChange={onChangeHandler}
                            value={form.name}
                            />
                        </InputWithLabel>                                                
                        </WrapperDirection>
                        <InputWithLabel label = "Correo electronico">
                            <input 
                            type="text"
                            name="email"
                            placeholder="correo electronico"
                            onChange={onChangeHandler}
                            value={form.email}
                            />                  
                        </InputWithLabel>
                        <InputWithLabel label = "Asunto">
                            <input 
                            type="text"
                            name="subject"
                            placeholder="asunto"
                            onChange={onChangeHandler}
                            value={form.subject}
                            />                  
                        </InputWithLabel>
                        <InputWithLabel label = "Mensaje">
                            <textarea 
                            rows = "10"
                            type="text"
                            name="message"
                            placeholder=""
                            onChange={onChangeHandler}
                            value={form.message}
                            />                  
                        </InputWithLabel>
                    </WrapperDirection>
                </div>
			     <Button onClick={handleSendEmail}> Enviar </Button>
            </form>
            </div>  
              
		</div>
    )
}

export default Support