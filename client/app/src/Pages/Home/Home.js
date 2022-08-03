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
import coins from "../../Assets/images/coins.png";
import ruly from "../../Assets/images/ruly.png";
import henry from "../../Assets/images/henry.png";
import bryan from "../../Assets/images/bryan.png";
import mauri from "../../Assets/images/mauri.png";
import denzell from "../../Assets/images/denzell.png";

import rocket from "../../Assets/images/blue-rocket.png";
import bitcoin from "../../Assets/images/bitcoin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect } from "react";

import "./Home.css";

const Home = (props, handleClick) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

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
                <h1>Crypto facil, rapido y seguro</h1>
              </div>
            </div>
            <div className="Home__card_side">
              <div className="Home__image">
                <img className="Home__img_bitcoin rebote" src={bitcoin} />
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
                Haz diferentes transacciones en la plataforma más popular de la
                región
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
                  transacciones, vender, comprar y ganar criptomonedas
                </h1>
              </div>
              <div className="Home__first_column_button">
                <a href="https://pumacoin-finance.web.app/trade">
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
          <div className="Home__column_third_wrapper">
            <div className="Home__card_secondary">
              <div className="Home__third_card_blue">
                <div className="Home__box_title">
                  <h1>
                    Unete a nosotros y conecta tu wallet para disfrutar de los
                    servicios PumaCoin en segundos
                  </h1>
                </div>
                <div className="Home__first_column_button">
                  <a href="https://pumacoin-finance.web.app/login">
                    <ButtonWhite className="Home__first_column_buttonP">
                      Acceder
                    </ButtonWhite>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Home__card_side">
            <div className="Home__card_side">
              <div className="Home__image">
                <img className="Home__img_model2 rebote" src={model2} />
              </div>
            </div>
          </div>
        </div>

        <div className="Home__fourth_card">
          <div className="Home__title_size_fourth_card">
            <h1>Desarrolladores</h1>
          </div>
          <div class="grid-container">
            <div className="Home__mini_cards">
              <div className="Home__card_side_profile">
                <div className="Home__card_side_profile">
                  <div className="Home__image">
                    <img
                      className="Home__img_profile"
                      src={bryan}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <div className="Home__title_size_fourth_card">
                <p>Bryan Martinez</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <p>Backend Dev & Blockchain Master</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <a
                  className="icon"
                  href="https://github.com/KinImoX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  className="icon"
                  href="https://hn.linkedin.com/in/-bryan-martinez?trk=profile-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="Home__mini_cards">
              <div className="Home__card_side_profile">
                <div className="Home__card_side_profile">
                  <div className="Home__image">
                    <img
                      className="Home__img_profile"
                      src={denzell}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <div className="Home__title_size_fourth_card">
                <p>Denzell Griffith</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <p>Frontend Dev & Product Designer</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <a
                  className="icon"
                  href="https://github.com/EnriqueDll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  className="icon"
                  href="https://hn.linkedin.com/in/denzell-griffith-243734247"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>

            <div className="Home__mini_cards">
              <div className="Home__card_side_profile">
                <div className="Home__card_side_profile">
                  <div className="Home__image">
                    <img
                      className="Home__img_profile"
                      src={henry}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <div className="Home__title_size_fourth_card">
                <p>Henry Espinoza</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <p>Full Stack Dev</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <a
                  className="icon"
                  href="https://github.com/Henry-MM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  className="icon"
                  href="https://hn.linkedin.com/in/henry-espinoza-moncada-42b3a61ba?trk=org-employees&original_referer="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
          </div>

          <div class="grid-second-container">
            <div className="Home__mini_cards">
              <div className="Home__card_side_profile">
                <div className="Home__card_side_profile">
                  <div className="Home__image">
                    <img
                      className="Home__img_profile"
                      src={mauri}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <div className="Home__title_size_fourth_card">
                <p>Olvin Ramos</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <p>Backend Dev & Database Manager</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <a
                  className="icon"
                  href="https://github.com/MauriRamos19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/olvin-mauricio-ramos-zavala-a0278a212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="Home__mini_cards">
              <div className="Home__card_side_profile">
                <div className="Home__card_side_profile">
                  <div className="Home__image">
                    <img
                      className="Home__img_profile"
                      src={ruly}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <div className="Home__title_size_fourth_card">
                <p>Ruly Funez</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <p>Frontend Dev</p>
              </div>
              <div className="Home__content_size_fourth_card">
                <a
                  className="icon"
                  href="https://github.com/Ruly16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/ruly-funez-35a357233/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Home__card_side">
          <div className="Home__img">
            <img className="Home_img_card" src={moneda} alt="coin" />
          </div>
        </div>
      </div>

      {/* <div class="grid-container">
                  <div className="Home__card_side">
                    <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="-bryan-martinez" data-version="v1">
                    </div>
                  </div>
                <div className="Home__card_side">
                  <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="-bryan-martinez" data-version="v1">
                    </div>
                </div>
              <div className="Home__card_side">
                <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="-bryan-martinez" data-version="v1">
                  </div>
              </div>
            </div>

            <div class="grid-second-container">
              <div className="Home__card_side">
                  <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="-bryan-martinez" data-version="v1">
                    </div>
                </div>

                <div className="Home__card_side">
                  <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="-bryan-martinez" data-version="v1">
                    </div>
                </div>

            </div> */}
    </div>
  );
};

export default Home;
