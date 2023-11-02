import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import loginUser from "../../action/loginUser";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import "./login.css";

export default function Login() {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  function handlerSubmit(e) {
    e.preventDefault();

    loginUser(datos);
  }
  function handlerInputEmail(e) {
    setDatos({ ...datos, email: e.target.value });
  }
  function handlerInputPassword(e) {
    setDatos({ ...datos, password: e.target.value });
  }

  return (
    <div className="fondo_div">
      <h1 className="d-flex justify-content-center">Ingresa Sesion</h1>

      <Form className="div_login" onSubmit={(e) => handlerSubmit(e)}>
        <Row className="d-flex justify-content-center">
          <Col xs={7} className="d-flex flex-column">
            <Form.Label>Correo</Form.Label>
            <input onChange={(e) => handlerInputEmail(e)}></input>

            <Form.Label>Contraseña</Form.Label>
            <input
              type="password"
              onChange={(e) => handlerInputPassword(e)}
            ></input>
          </Col>
        </Row>
        <br />
        <Row className="d-flex justify-content-center">
          <Col xs={7} className="d-flex justify-content-around">
            <Button type="submit">Iniciar Sesion</Button>
            <Link to={"/singup"}>
              <Button>Sign up</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
