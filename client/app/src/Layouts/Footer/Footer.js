import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useCookies, withCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WrapperDirection from "../../Components/WrapperDirection/WrapperDirection";
import parrot from "../../Assets/images/parrot.png";
import "./Footer.css";

const Footer = ({ className }) => {
  return (
    <footer className={`Footer ${className}`}>
      <div className="Footer__row">
        <div className="Footer__column">
          <div className="Footer__image">
            <img className="Footer__img_parrot" src={parrot} alt="coin" />
          </div>
          <div className="color_trampa">
            <p>Acerca de Nosotros</p>
            <p>Politicas de privacidad</p>
            <p>Terminos de servicio</p>
          </div>
        </div>
        <div className="Footer__column">
          <p>Acerca de Nosotros</p>
          <p>Politicas de privacidad</p>
          <p>Terminos de servicio</p>
        </div>
        <div className="Footer__column">
          <p>Contacto</p>
          <p>
            <a
              className="icon2"
              href="https://github.com/MauriRamos19/puma-coin-project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a
              className="icon2"
              href="https://t.me/+tQzT-DZk1Wg4ZDIz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-telegram" />
            </a>
            <a
              className="icon2"
              href="https://twitter.com   "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
            <a
              className="icon2"
              href="mailto:pumacoin1847@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-google" />
            </a>
          </p>
          <p>
            <a
              className="icon2"
              href="https://goo.gl/maps/VTHytKKcGb7CrkoJ6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </a>
            Tegucigalpa, Honduras
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
