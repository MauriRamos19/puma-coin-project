import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import InputContainer from "../../Components/InputContainer/InputContainer";
import AuthBlueSquare from "../../Layouts/AuthBlueSquare/AuthBlueSquare";
import "./Login.css";
import { login as loginService } from "../../services/auth";
import { sendEmail } from "../../services/auth";
import Message from "../../Components/Message/Message";
import { withCookies, Cookies } from "react-cookie";

const Login = ({ withCookies, cookies, dispatchModal }) => {
  const [message, setMessage] = useState({ active: false });
  const navigate = useNavigate();

  //const Login = (props) => {

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

    //const { token, error } = await loginService(form);

/*     const options = {
      domain: "localhost",
      path: "/",
      maxAge: 1,
      HttpOnly: true,
      secure: true,
      sameSite: "strict",
    };
 */
    //cookies.set("access_token", token, options);
    //navigate('/');
    localStorage.setItem("access_token", token);
    navigate("/");
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

  const onSubmitTest = (evt) => {
    //evt.preventDefault()
    sendEmail(evt.currentTarget.email.value).then((response) => {
      console.log(response);
    });
    navigate("/");
  };
  
  /* const options = {
			domain: 'localhost',
			path: '/',
			maxAge: 1,
			HttpOnly: true,
			secure:true,
			sameSite: 'strict'
			
		}

		cookies.set('access_token', token, options);
		navigate('/');
	}) */

  const openModal = (evt) => {
    dispatchModal({
      type: "emailChangePassword",
      data: {
        content: (
          <form className="Login__form" onSubmit={onSubmitTest}>
            <InputContainer>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo Electrónico"
              />
            </InputContainer>
            <Button type="submit">Enviar</Button>
          </form>
        ),
      },
    });
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
        <Link className=" Change__password" to="" onClick={openModal}>
          ¿Has olvidado tu contraseña?
        </Link>
      </div>
      <AuthBlueSquare />
    </div>
  );
};

export default Login;
//export default withCookies(Login);
