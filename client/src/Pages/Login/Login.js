import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import InputContainer from "../../Components/InputContainer/InputContainer";
import AuthBlueSquare from "../../Layouts/AuthBlueSquare/AuthBlueSquare";
import "./Login.css";
import { login as loginService } from "../../services/auth";
import Message from "../../Components/Message/Message";

const Login = ({ dispatchModal }) => {
  const [message, setMessage] = useState({ active: false });
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();

    const { token, error } = await loginService(form);

    if (error || !token) {
      setMessage({
        active: true,
        type: "error",
        message: error,
      });

      return;
    }

    localStorage.setItem("token", token);
    navigate("/");

    dispatchModal({ type: "emailChangePassword" });
  };

  const onChangeHanlder = (evt) => {
    setForm((prev) =>
      Object.assign(
        {},
        {
          ...prev,
          [evt.target.name]: evt.target.value,
        }
      )
    );

    setMessage({ active: false });
  };

  return (
    <div className="Login">
      <div className="Login__form_wrapper">
        <div className="Login__header">
          <p>
            ¿Eres nuevo? <Link to="/register">¡Registrate Aquí!</Link>
          </p>
        </div>
        <h1>Iniciar sesión</h1>
        <form className="Login__form" onSubmit={onSubmitHandler}>
          {message.active && (
            <Message type={message.type} message={message.message} />
          )}

          <InputContainer>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={onChangeHanlder}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={onChangeHanlder}
            />
          </InputContainer>
          <Button type="submit">Ingresa</Button>
        </form>
        {/* {dispatchModal({ type: "completeRegister" })}; */}
        {/* <div className="Change__password">
					<p> */}
        <Link className="Change__password" to="/register">
          ¿Has olvidado tu contraseña?
        </Link>
        {/* </p>
				</div> */}
      </div>
      <AuthBlueSquare />
    </div>
  );
};

export default Login;
