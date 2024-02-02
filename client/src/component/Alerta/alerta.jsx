import React from "react";
import Alert from 'react-bootstrap/Alert';
import "./alerta.css";

export default function Alerta({ tipo }) {


  return (
    <>
      {tipo === "agrego_producto" ? (
        <div className="alert-container">
          <Alert variant="info">
            Se agregó correctamente 
          </Alert>
        </div>
      ) : tipo === "contraseña_incorrecta" ? (
        <div className="alert-container">
          <Alert variant="info">
            Contraseña incorrecta
          </Alert>
        </div>
      ) : tipo === "ingresar_usuario" ? (
        <div className="alert-container">
          <Alert variant="info">
           Inicia Sesión
          </Alert>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}