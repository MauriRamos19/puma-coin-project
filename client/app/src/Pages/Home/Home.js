import React, { Suspense, useRef, useState } from "react";
import Button from "../../Components/Button/Button";
import ButtonWhite from "../../Components/ButtonWhite/ButtonWhite";
import InputWithLabel from "../../Components/InputWithLabel/InputWithLabel";
import WrapperDirection from "../../Components/WrapperDirection/WrapperDirection";
import moneda from "../../Assets/images/moneda.png";
import logoIs from "../../Assets/images/logoIs.png";
import tarjeta from "../../Assets/images/tarjetaUnah.png";
import model2 from "../../Assets/images/model (2).png";
import moneda3D from "../../Assets/moneda.glb";

import rocket from "../../Assets/images/blue-rocket.png";
import bitcoin from "../../Assets/images/bitcoin.png";

import "./Home.css";

const Home = (props) => {
  return (
    <div className="Home">
      <div className="Home__first_column_wrapper">
        <div className="Home__title_column_size">
          <div className="Home__card_principal">
            <div className="Home__card_side">
              <div className="Home__image">
                <img className="Home__img_rocket" src={rocket} />
              </div>
            </div>
            <div className="Home__first_card">
              <div className="Home__box_title">
                <h1>Bitcoin facil, rapido y seguro</h1>
              </div>
            </div>
            <div className="Home__card_side">
              <div className="Home__image rebote">
                <img className="Home__img_bitcoin" src={bitcoin} />
              </div>
            </div>
          </div>
        </div>

        <div className="Home__second_card">
          <div className="Home__column_second_wrapper">
            <div className="Home__title_column_size">
              <h1>Pumacoin, el comienzo de algo grandioso</h1>
            </div>
            <div className="Home__text_column_size">
              <p>
                Haz diferentes transacciones en la plataforma descentralizada
                más popular de la región
              </p>
            </div>
          </div>
          <div className="Home__column_second_wrapper">
            <model-viewer
              src={moneda3D}
              camera-controls
              auto-rotate
              disable-zoom
              camera-orbit
            ></model-viewer>
          </div>
        </div>

        <div className="Home__title_column_size">
          <div className="Home__card_secondary">
            <div className="Home__second_card_blue">
              <div className="Home__box_title">
                <h1>
                  Comienza con la plataforma más fácil y segura para realizar
                  transacciones, vender, comprar y ganar critomonedas
                </h1>
              </div>
              <div className="Home__first_column_button">
                <a href="http://localhost:3000/trade">
                  <ButtonWhite className="Home__first_column_buttonP">
                    Empezar
                  </ButtonWhite>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Home__second_card">
          <div className="Home__column_second_wrapper_a">
            <div className="Home__title_column1_size">
              <h1>Rapido</h1>
            </div>
            <div className="Home__title_column_size">
              <h1>Confiable</h1>
            </div>
            <div className="Home__title_column2_size">
              <h1>Sin complicaciones</h1>
            </div>
          </div>

          <div className="Home__column_second_wrapper_a">
            <div className="conversor">
              <div className="Home__blue_box_title">
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
                      <span>PUMA</span>
                    </WrapperDirection>
                  </InputWithLabel>

                  <Button type="button">Compra Ahora</Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="Home__third_card">
          <div className="Home__card_principal">
            <div className="Home__card_side">
              <div className="Home__title_column_size">
                <div className="Home__card_secondary">
                  <div className="Home__second_card_blue">
                    <div className="Home__box_title">
                      <h1>
                        Unete a nosotros y conecta tu wallet para disfrutar de
                        los servicios PumaCoin en segundos
                      </h1>
                    </div>
                    <div className="Home__first_column_button">
                      <a href="http://localhost:3000/login">
                        <ButtonWhite className="Home__first_column_buttonP">
                          Acceder
                        </ButtonWhite>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Home__card_side">
              <div className="Home__card_side">
                <div className="Home__image rebote">
                  <img className="Home__img_coin" src={moneda} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <footer>
          <div className="footer-content"></div>
        </footer> */}
      </div>
    </div>
  );
};

export default Home;
