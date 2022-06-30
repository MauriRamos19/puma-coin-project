import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { resetPassword } from "../../services/auth";

import "./PasswordReset.css";

const PasswordReset = (props) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const onChangePasswordHanler = (evt) => {
    setPassword(evt.currentTarget.value);
  };

  const onChangePassword2Hanler = (evt) => {
    setPassword2(evt.currentTarget.value);
  };

  const onSubmitPassword = (evt) => {
    //evt.preventDefault()

    const id = window.location.pathname.split("/")[2];
    const token = window.location.pathname.split("/")[3];

    resetPassword(id, token, password, password2).then((response) => {
      console.log(response);
    });

    //evt.setState({ showModal: false});
    navigate("/");
  };

  return (
    <div className="PasswordReset">
      <div className="PasswordReset__first_column_wrapper">
        <div className="PasswordReset__title_column_size">
          <h1>Restablece tu contraseña</h1>
        </div>
        <div className="PasswordReset__first_column_wrapper">
          <div className="myDIVA">
            <div className="PasswordReset__box_title">
              <h1>Por favor, ingresa tu nueva contraseña</h1>
            </div>
            <div>
              <form className="PasswordReset__form" onSubmit={onSubmitPassword}>
                <div className="input-with-labelA">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChangePasswordHanler}
                  />
                </div>
                <div className="input-with-labelA">
                  <label htmlFor="password2">Confirmación de contraseña</label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    value={password2}
                    onChange={onChangePassword2Hanler}
                  />
                </div>
                <Button type="submit">Aceptar</Button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="Home__image">
						<img className='Home__img_card' src={tarjeta} />
					</div>
					<div className="Home__image">
						<img className='Home__img_logoIS' src={logoIs} />
					</div>
					<div className="Home__image">
						<img className='Home__img_coin' src={moneda} />
					</div> */}
      </div>
    </div>
  );
};

export default PasswordReset;
