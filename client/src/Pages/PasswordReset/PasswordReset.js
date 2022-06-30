import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { resetPassword } from "../../services/auth";
import unah from "../../Assets/images/unah.png";
import moneda from "../../Assets/images/moneda.png";
import audi from "../../Assets/images/audi.png";
import btc from "../../Assets/images/BTC.png";
import puma from "../../Assets/images/puma.png";

import "./PasswordReset.css";

const PasswordReset = (props) => {

	let { userID, token } = useParams();
	const navigate = useNavigate();
	const [password, setPassword] = useState({
		password: '',
		password2: ''
	});

	const onChangeHandler = (evt) => {
		console.log(evt)
		setPassword(prev => Object.assign({}, {
			...prev,
			[evt.target.name]: evt.target.value
		}));
	};

	const onSubmitPassword = async (evt) => {
		evt.preventDefault()

		const isChanged = await resetPassword(
			userID, token, password.password, password.password2);

		if (isChanged === true) navigate("/");
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
										value={password.password}
										onChange={onChangeHandler}
									/>
								</div>
								<div className="input-with-labelA">
									<label htmlFor="password2">Confirmación de contraseña</label>
									<input
										type="password"
										name="password2"
										id="password2"
										value={password.password2}
										onChange={onChangeHandler}
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
