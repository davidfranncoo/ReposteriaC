import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconoT from "../../Img/logo1.png";
import { Link } from 'react-router-dom';
import { loginUser } from "../../action/index";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Alerta from "../Alerta/alerta.jsx"


import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const [alerta,setAlerta]=useState(false)
  const productData = useSelector((state) => state.userStatus) || [];

  useEffect(() => {
    if (productData.ERROR === true) {
      setAlerta(true) 
     

       setTimeout(() => {
      setAlerta(false);
    }, 3000);

    }
    if (productData.ERROR !== true && productData.length !== 0) {
      window.location.href = "/home";
    }
  }, [productData]);

  const [error, setError] = useState({
    email: true,
    password: true,
    emailError: "* Ingresa un correo valido",
    passwordError: "* Ingresa una contraseña de 8 caracteres o más",
  });
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  function handlerSubmit(e) {
    e.preventDefault();

    dispatch(loginUser(datos));

    setDatos({
      email: "",
      password: "",
    });
  }
  function handlerInputEmail(e) {
    setDatos({ ...datos, email: e.target.value });
    if (
      !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e.target.value)
    ) {
      setError({ ...error, email: false });
    } else {
      setError({ ...error, email: true });
    }
  }
  function handlerInputPassword(e) {
    setDatos({ ...datos, password: e.target.value });

    if (!/^\w{8,}$/.test(e.target.value)) {
      setError({ ...error, password: false });
    } else {
      setError({ ...error, password: true });
    }
  }

  return (
    <div className="div_login">
      {
          alerta==true?
          <Alerta tipo={"contraseña_incorrecta"}/>
        :
        <></>
        }
      <div className="Icon_back">
        <Link to="/home">
          <img src={iconoT} className="icon_img"></img>
          <i class="bi bi-backspace-fill"></i>
        </Link>
      </div>

      <div className="div_form">
        <Form onSubmit={(e) => handlerSubmit(e)}>
          <h1 className="d-flex justify-content-center">
            <i class="bi bi-person-circle"></i>
          </h1>

          <div className="d-flex flex-column">
            <h6>Correo</h6>

            <input
              onChange={(e) => handlerInputEmail(e)}
              value={datos.email}
            ></input>
            {error.email === false ? (
              <Form.Label className="error">{error.emailError}</Form.Label>
            ) : (
              ""
            )}
          </div>

          <div className="d-flex flex-column">
            <h6>Contraseña</h6>
            <input
              type="password"
              onChange={(e) => handlerInputPassword(e)}
              value={datos.password}
            ></input>
            {error.password === false ? (
              <Form.Label className="error">{error.passwordError}</Form.Label>
            ) : (
              ""
            )}
          </div>

          <div className="d-flex flex-column justify-content-center">
            <Link to={"/singup"}>
              <h6>Sign up</h6>
            </Link>

            <Button
              type="submit"
              disabled={
                !datos.email ||
                !datos.password ||
                error.email === false ||
                error.password === false
              }
            >
              Iniciar Sesion
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
