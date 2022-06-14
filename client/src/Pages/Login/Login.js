import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import InputContainer from "../../Components/InputContainer/InputContainer";
import AuthBlueSquare from "../../Layouts/AuthBlueSquare/AuthBlueSquare";
import "./Login.css";
import { login as loginService } from "../../services/auth";

const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(form);
    loginService(form);
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
  };

  return (
    <div className="Login">
      <div className="Login__form_wrapper">
        <div className="Login__header">
          <p>
            New Here? <Link to="/register">Sign up!</Link>
          </p>
        </div>
        <h1>Login</h1>
        <form className="Login__form" onSubmit={onSubmitHandler}>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={onChangeHanlder}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={onChangeHanlder}
            />
          </InputContainer>
          <Button type="submit">Login!</Button>
        </form>
      </div>
      <AuthBlueSquare />
    </div>
  );
};

export default Login;
