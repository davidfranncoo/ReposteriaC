import React, { useState } from "react";
import createUser from "../../action/createUser";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signin.css";
import iconoT from "../../Img/logo1.png";


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

  }

  const [datos, setDatos] = useState({
    username: "",
    email: "",
    password: "",
  });
  // setTimeout(() => {
  //   window.location.href = "/login";
  // }, 3000);

  function handlerSubmit(e) {
    e.preventDefault();
  
    createUser(datos)
      .then((response) => {
        // Código a ejecutar cuando la promesa se resuelve correctamente
        console.log("Respuesta exitosa:", response);
  
        // Actualiza el estado u realiza otras operaciones si es necesario
        setDatos({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        // Código a ejecutar cuando la promesa se rechaza con un error
        console.error("Error en la solicitud:", error);
  
        // Puedes manejar el error, mostrar un mensaje al usuario, etc.
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
    <div className="div_login">
      <div className="Icon_back">

      <Link to="/home">
          <img src={iconoT} className="icon_img"></img>
          <i class="bi bi-backspace-fill"></i>
        </Link>
      </div>


      <div className="div_form">





      <Form onSubmit={(e) => handlerSubmit(e)}>
        

          <h1 className="d-flex justify-content-center">
            <i className="bi bi-person-circle"></i>
          </h1>

        
         
          <div className="d-flex flex-column">
            <h6>Usuario</h6>
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
 </div>
              {/*----------------------- correo --------------------------------------------------  */}

              <div className="d-flex flex-column">
            <h6>Correo</h6>
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
 </div>
 <div className="d-flex flex-column">
            <h6>Contraseña</h6>

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
          </div>
        
       
          <div className="d-flex flex-column justify-content-center">
          <Link to={"/login"}>
            <h6>Log in</h6>
          </Link>
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

          
              </div>
      </Form>
      </div>
    </div>
  );
}
