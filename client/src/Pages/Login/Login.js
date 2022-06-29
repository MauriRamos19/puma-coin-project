import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import InputContainer from "../../Components/InputContainer/InputContainer";
import AuthBlueSquare from "../../Layouts/AuthBlueSquare/AuthBlueSquare";
import "./Login.css";
import { login as loginService } from "../../services/auth";
import Message from "../../Components/Message/Message";


import { withCookies, Cookies } from 'react-cookie';


const Login = (props) => {

	const [message, setMessage] = useState({ active: false });
	const navigate = useNavigate();

	const {  cookies } = props

	
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onSubmitHandler = (async (evt) => {

		evt.preventDefault();

		const { token, error } = await loginService(form);

		if (error || !token) {

			setMessage({
				active: true,
				type: 'error',
				message: error
			})

			return;
		}

		const options = {
			domain: 'localhost',
			path: '/',
			maxAge: 1,
			HttpOnly: true,
			secure:true,
			sameSite: 'strict'
			
		}

		cookies.set('access_token', token, options);
		navigate('/');
	})

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

		setMessage({ active: false })
	};

	return (
		<div className="Login">
			<div className="Login__form_wrapper">
				<div className="Login__header">
					<p>
						¿Eres nuevo aquí? <Link to="/register">¡Regístrate!</Link>
					</p>
				</div>
				<h1>Iniciar Sesión</h1>
				<form className="Login__form" onSubmit={onSubmitHandler}>

					{message.active &&
						<Message
							type={message.type}
							message={message.message} />
					}

					<InputContainer>
						<label htmlFor="email">Correo</label>
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
					<Button type="submit">¡Ingresar!</Button>
				</form>
			</div>
			<AuthBlueSquare />
		</div>
	);

};



export default withCookies(Login);
