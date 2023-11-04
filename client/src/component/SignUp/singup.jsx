import React, { useState } from "react";
import createUser from "../../action/createUser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./signin.css";

// or less ideally

export default function SignUp() {
  const [error, setError] = useState({
    username: true,
    email: true,
    password: true,
    usernameError: "* Debes agregar un Nombre",
    emailError: "* Ingresa un correo valido",
    passwordError: "* Ingresa una contraseña de 8 caracteres o más",
  });

  function validacion(objeto) {
    const clave = Object.keys(objeto);
    const valor = Object.values(objeto);

    console.log("claveeee", clave);
    console.log("Valor", valor);

    if (clave[0] === "username" && valor[0] === false) {
      setError({ ...error, username: false });
    }
    if (clave[0] === "username" && valor[0] === true) {
      setError({ ...error, username: true });
    }
    if (clave[0] === "email" && valor[0] === false) {
      setError({ ...error, email: false });
    }
    if (clave[0] === "email" && valor[0] === true) {
      setError({ ...error, email: true });
    }
    if (clave[0] === "password" && valor[0] === false) {
      setError({ ...error, password: false });
    }
    if (clave[0] === "password" && valor[0] === true) {
      setError({ ...error, password: true });
    }
    //   error.username = "* Debes agregar un Nombre";
    // if (error.email[0] === false) error.email = "* Ingresa un correo valido";
    // if (error.password[0] === false)
    //   error.password = "* Ingresa una contraseña";
    // return ;
  }

  const [datos, setDatos] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handlerSubmit(e) {
    e.preventDefault();

    createUser(datos);
    setDatos({
      username: "",
      email: "",
      password: "",
    });
  }
  function handlerInputEmail(e) {
    setDatos({ ...datos, email: e.target.value });

    if (
      !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e.target.value)
    ) {
      validacion({ email: false });
    } else {
      validacion({ email: true });
    }
  }
  function handlerInputPassword(e) {
    setDatos({ ...datos, password: e.target.value });
    if (!/^\w{8,}$/.test(e.target.value)) {
      validacion({ password: false });
    } else {
      validacion({ password: true });
    }
  }
  function handlerInputName(e) {
    setDatos({ ...datos, username: e.target.value });
    if (!e.target.value) {
      validacion({ username: false });
    } else {
      validacion({ username: true });
    }
  }

  return (
    <div className="fondo_div">
      <Form onSubmit={(e) => handlerSubmit(e)}>
        <Container>
          <h1 className="d-flex justify-content-center">Crear Usuario</h1>

          <Row className="d-flex justify-content-center">
            <Col xs={7} className="d-flex flex-column">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                size="sm"
                type="username"
                value={datos.username}
                onChange={(e) => handlerInputName(e)}
              ></Form.Control>
              {error.username === false ? (
                <Form.Label className="error">{error.usernameError}</Form.Label>
              ) : (
                ""
              )}

              {/*----------------------- correo --------------------------------------------------  */}

              <Form.Label>Correo</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                value={datos.email}
                onChange={(e) => handlerInputEmail(e)}
              ></Form.Control>
              {error.email === false ? (
                <Form.Label className="error">{error.emailError}</Form.Label>
              ) : (
                ""
              )}

              <Form.Label>Contraseña</Form.Label>

              {/*-----------------------  password--------------------------------------------------  */}

              <Form.Control
                size="sm"
                type="password"
                value={datos.password}
                onChange={(e) => handlerInputPassword(e)}
              ></Form.Control>
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
                size="sm"
                disabled={
                  !datos.username ||
                  !datos.email ||
                  !datos.password ||
                  error.username === false ||
                  error.email === false ||
                  error.password === false
                }
              >
                Crear Usuario
              </Button>
              {""}

              <Link to={"/login"}>
                <Button size="sm">Ingresar</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
