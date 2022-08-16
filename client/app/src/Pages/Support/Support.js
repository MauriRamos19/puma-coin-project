import React, { useEffect, useState } from "react";
import cargando from "../../Assets/images/cargando.png";
import WrapperDirection from "../../Components/WrapperDirection/WrapperDirection";
import InputWithLabel from "../../Components/InputWithLabel/InputWithLabel";
import { useNavigate, useParams } from "react-router-dom";

import moneda from "../../Assets/images/moneda.png";

import "./Support.css";
import Button from "../../Components/Button/Button";

import { sendEmail } from "../../services/support";

const Support = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (evt) => {
    const propery = evt.target.name;
    const value = evt.target.value;

    setForm((prev) =>
      Object.assign(
        {},
        {
          ...prev,
          [propery]: value,
        }
      )
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleSendEmail = async () => {
    try {
      const data = await sendEmail(form);

      
      if (data) {
        alert("Mensaje enviado");
      }

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Support__pag">
      <div className="Support__first_column_wrapper">
        <div className="Support__header">
          <h1>Soporte PumaCoin</h1>
        </div>
        <div className="Support__text">
          <p>Por favor, ingresa los datos que a continuación se te pide</p>
          <p>Pronto nuestro equipo PumaCoin se pondrá en contacto contigo</p>
        </div>

        <div className="Support__image">
          <img className="Support__img_coin" src={moneda} alt="" />
        </div>

        <form className="Support__form Support__first_column_wrapper">
          <div className="Support__inputs">
            <WrapperDirection direction="vertical">
              <WrapperDirection direction="horizontal">
                <InputWithLabel label="Escriba su Nombre">
                  <input
                    type="text"
                    name="name"
                    placeholder="nombre"
                    onChange={onChangeHandler}
                    value={form.name}
                  />
                </InputWithLabel>
                <InputWithLabel label="correo electronico">
                  <input
                    type="text"
                    name="email"
                    placeholder="correo electrónico"
                    onChange={onChangeHandler}
                    value={form.email}
                  />
                </InputWithLabel>
              </WrapperDirection>
              <InputWithLabel label="Asunto">
                <input
                  type="text"
                  name="subject"
                  placeholder="asunto"
                  onChange={onChangeHandler}
                  value={form.subject}
                />
              </InputWithLabel>
              <InputWithLabel label="Mensaje">
                <textarea
                  rows="10"
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
  );
};

export default Support;
