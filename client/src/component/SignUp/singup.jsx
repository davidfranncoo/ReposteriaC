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
    username: "",
    email: "",
  });
  function validacion(objeto) {
    const clave = Object.keys(objeto);
    const valor = Object.values(objeto);

    let error = {
      username: true,
      email: true,
      password: true,
    };
    error[clave] = valor;

    if (error.username[0] === false)
      error.username = "* Debes agregar un Nombre";
    if (error.email[0] === false) error.email = "* Ingresa un correo valido";
    if (error.password[0] === false)
      error.password = "* Ingresa una contraseña";
    return error;
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
      setError(validacion({ email: false }));
    } else {
      setError(validacion({ email: true }));
    }
  }
  function handlerInputPassword(e) {
    setDatos({ ...datos, password: e.target.value });
    if (!e.target.value) {
      setError(validacion({ password: false }));
    } else {
      setError(validacion({ password: true }));
    }
  }
  function handlerInputName(e) {
    setDatos({ ...datos, username: e.target.value });
    if (!e.target.value) {
      setError(validacion({ username: false }));
    } else {
      setError(validacion({ username: true }));
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
              {error.username ? (
                <Form.Label className="error">{error.username}</Form.Label>
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
              {error.email ? (
                <Form.Label className="error">{error.email}</Form.Label>
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
              {error.password ? (
                <Form.Label className="error">{error.password}</Form.Label>
              ) : (
                ""
              )}
            </Col>
          </Row>

          <br />
          <Row className="d-flex justify-content-center">
            <Col xs={7} className="d-flex justify-content-around">
              <Button type="submit" size="sm">
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
