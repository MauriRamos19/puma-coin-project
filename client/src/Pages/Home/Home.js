import React from "react";
import Button from "../../Components/Button/Button";
import InputContainer from "../../Components/InputContainer/InputContainer";
import { Link } from "react-router-dom";
import AuthBlueSquare from "../../Layouts/AuthBlueSquare/AuthBlueSquare";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="Home">
      <div className="Home__first_column_wrapper">
        <div className="Home__title_column_size">
          <h1>
            Bitcoin confiable y seguro!
          </h1>
        </div>
        <div className="Home__first_column_wrapper_size">
          <p>
            Primera plataforma en Honduras facil y segura para realizar
            transacciones, vender y comprar productos en tus tiendas de
            conveniencia
          </p>
        </div>
        <div className="Home__first_column_button">
          <Button className="Home__first_column_buttonP">Empezar</Button>
        </div>
      </div>
      <div className="Home__first_column_wrapper">
        <div className="myDIV">
          <div className="Home__box_title">
            <h1>PumaCoin</h1>
          </div>
          <div>
            <form className="Home__form">
              <div className="InputContainerCoin">
                <label htmlFor="getClient">Recibes</label>
                <div>
                  <input type="text" name="getClient" id="getClient" />
                </div>
                {/* <input
                type="text"
                name="getClient"
                id="getClient"
                /> */}
              </div>
              <div className="InputContainerCoin">
                <label htmlFor="payClient">Pagas</label>
                <input type="text" name="payClient" id="payClient" />
              </div>
              <Button type="button">Compra Ahora</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
