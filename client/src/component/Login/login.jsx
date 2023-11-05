import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {loginUser} from "../../action/index";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import "./login.css";

export default function Login() {
  const dispatch=useDispatch()
  const productData = useSelector((state) => state.userStatus) || [];
  useEffect(() => {
    // Realizar algún efecto cuando productData cambie
    console.log("productData ha cambiado:", productData);
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
    console.log("datos",datos)
    dispatch(loginUser(datos));
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
    <div className="fondo_div">
      <Link to="/home">
            <li>🏠</li>
          </Link>
      <h1 className="d-flex justify-content-center">Ingresa Sesion</h1>

      <Form className="div_login" onSubmit={(e) => handlerSubmit(e)}>
        <Row className="d-flex justify-content-center">
          <Col xs={7} className="d-flex flex-column">
            <Form.Label>Correo</Form.Label>
            <input onChange={(e) => handlerInputEmail(e)}></input>
            {error.email === false ? (
              <Form.Label className="error">{error.emailError}</Form.Label>
            ) : (
              ""
            )}

            <Form.Label>Contraseña</Form.Label>
            <input
              type="password"
              onChange={(e) => handlerInputPassword(e)}
            ></input>
            {error.password === false ? (
              <Form.Label className="error">{error.passwordError}</Form.Label>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <br />
        <Row className="d-flex justify-content-center">
          <Col xs={7} className="d-flex justify-content-around">
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
            <Link to={"/singup"}>
              <Button>Sign up</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
