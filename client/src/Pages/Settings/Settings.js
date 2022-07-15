import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imagePlaceHolder from "../../Assets/images/userImagePlaceHolder.png";
import Button from "../../Components/Button/Button";
import Select from "../../Components/Select/Select";
import InputWithLabel from "../../Components/InputWithLabel/InputWithLabel";
import InputFileWithPreview from "../../Components/InputFileWithPreview/InputFileWithPreview";
import WrapperDirection from "../../Components/WrapperDirection/WrapperDirection";

import "./Settings.css";
import { getInfoAccount } from "../../services/settings";

const Settings = () => {


  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    newPassword: "",
    newPassword2: "",
    img: "",
    phone: "",
    address: "",
    address2: "",
    country: "",
    department: "",
    city: "",
    zipCode: "",
  });

  /* const [newPassword, setNewPassowrd] = useState({
    newPassword: "",
    newPassword2: "",
  }); */

  /* useEffect(  () => {

    getInfoAccount().then(data => {
      setUser( (prev) => {
        return {
          ...prev,
          ...data.user
        };
      });
    });

  
  }, []) */
  

  const onChangeHandler = (evt) => {
    const propery = evt.target.name;
    const value = evt.target.value;

    setUser((prev) =>
      Object.assign(
        {},
        {
          ...prev,
          [propery]: value,
        }
      )
    );
  };

  return (
  
    <div className="Settings__pag">
      <form className="Settings__form">
        <div className="Settings__header">
          <h1>Perfil del Usuario</h1>
          <p>Permitenos ayudarte a mantener actualizado tu perfil</p>
        </div>
        <div className="Settings__photo">
          <InputFileWithPreview
            name="img"
            alt="img"
            imagePlaceHolder={imagePlaceHolder}
            onChange={onChangeHandler}
            value={user.img}
          />
        </div>
        <div className="Settings__inputs">
          <WrapperDirection direction="vertical">
            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Nombre">
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.name}
                />
              </InputWithLabel>
              <InputWithLabel label="Apellido">
                <input
                  type="text"
                  name="lastName"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.lastName}
                />
              </InputWithLabel>
              <InputWithLabel label="Correo Electronico">
                <input
                  type="text"
                  name="email"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.email}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Contraseña Actual">
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.password}
                />
              </InputWithLabel>
              <InputWithLabel label="Nueva Contraseña">
                <input
                  type="password"
                  name="newPassword"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.newPassword}
                />
              </InputWithLabel>
              <InputWithLabel label="Confirmar Contraseña">
                <input
                  type="password"
                  name="newPassword2"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.newPassword2}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Telefono">
                <input
                  type="text"
                  name="phone"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.phone}
                />
              </InputWithLabel>
            </WrapperDirection>
            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Direccion 1">
                <input
                  type="text"
                  name="address"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.address}
                />
              </InputWithLabel>
            </WrapperDirection>
            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Direccion 2">
                <input
                  type="text"
                  name="address2"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.address2}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Pais">
                <input
                  type="text"
                  name="country"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.country}
                />
              </InputWithLabel>

              <InputWithLabel label="Departamento">
                <input
                  type="text"
                  name="department"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.department}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection>
              <InputWithLabel label="Ciudad">
                <input
                  type="text"
                  name="city"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.city}
                />
              </InputWithLabel>
              <InputWithLabel label="Codigo Postal">
                <input
                  type="text"
                  name="zipCode"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.zipCode}
                />
              </InputWithLabel>
            </WrapperDirection>
          </WrapperDirection>
        </div>
        <div className="Settings__submit-button">
          <Button type="submit">Actulizar</Button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
