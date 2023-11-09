import React from "react";
import "./psingup.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import iconoT from "../../Img/logo1.png";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

export default function pSingup() {
  return (
    <div className="div_login">
      <div className="Icon_back">
        <Link to="/home">
          <img src={iconoT} className="icon_img"></img>
          <i class="bi bi-backspace-fill"></i>
        </Link>
      </div>

      <div className="div_form">
        <Form>
          <h1 className="d-flex justify-content-center">
            <i class="bi bi-person-circle"></i>
          </h1>
          <div className="d-flex flex-column">
            <h6>Correo</h6>

            <input></input>
          </div>

          <div className="d-flex flex-column">
            <h6>Contraseña</h6>

            <input type="password"></input>
          </div>
            <div className="d-flex flex-column justify-content-center">
                
          <Link to={"/singup"}>
            <h6>Sign up</h6>
          </Link>

          <Button type="submit">Iniciar Sesion</Button>
            </div>
        </Form>
      </div>
    </div>
  );
}
