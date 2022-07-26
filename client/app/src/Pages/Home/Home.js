import React, { Suspense, useRef, useState } from "react";
import Button from "../../Components/Button/Button";
import InputWithLabel from "../../Components/InputWithLabel/InputWithLabel";
import WrapperDirection from "../../Components/WrapperDirection/WrapperDirection";
import moneda from '../../Assets/images/moneda.png'
import logoIs from '../../Assets/images/logoIs.png'
import tarjeta from '../../Assets/images/tarjetaUnah.png'
import model2 from '../../Assets/images/model (2).png'
import moneda3D from '../../Assets/moneda.glb'


import "./Home.css";

const Home = (props) => {
	return (
		<div className="Home">
			<div className="Home__first_column_wrapper">

				<div className="Home__title_column_size">
					<h1>
						Crypto confiable y seguro!
					</h1>
				</div>
				<div className="Home__first_column_wrapper_size">
					<p>
						Primera plataforma en Honduras fácil y segura para realizar
						transacciones, vender y comprar productos en tus tiendas de
						conveniencia
					</p>
				</div>
				<div className="Home__first_column_button">
					<Button className="Home__first_column_buttonP">Empezar</Button>
				</div>
					<div className="Home__image">
						<img className='Home__img_card' src={tarjeta} />
					</div>
					<div className="Home__image">
						<img className='Home__img_logoIS' src={logoIs} />
					</div>
					<div className="Home__image rebote">
						<img className='Home__img_coin' src={model2} />
					</div>
					<model-viewer src={moneda3D} camera-controls auto-rotate disable-zoom camera-orbit></model-viewer>
			</div>
			<div className="Home__first_column_wrapper">
				<div className="myDIV">
					<div className="Home__box_title">
						<h1>PumaCoin</h1>
					</div>
					<div>
						<form className="Home__form">							

							<InputWithLabel label="Inviertes">
								<WrapperDirection className="Home__form__input">
									<input type="text" name="payClient" id="payClient" />
									<span>LPS</span>
								</WrapperDirection>
							</InputWithLabel>

							<InputWithLabel label="Recibes">
								<WrapperDirection className="Home__form__input">
									<input type="text" name="getClient" id="getClient" />
									<span>Puma</span>
								</WrapperDirection>
							</InputWithLabel>

							<Button type="button">Compra Ahora</Button>
						</form>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
