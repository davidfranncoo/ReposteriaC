import React from "react";
import Alert from 'react-bootstrap/Alert';
import "./alerta.css"

export default function Alerta(tipo){
    
    return (
        <>
        {
            tipo="agrego_producto"?

            <div className="alert-container">
            <Alert  variant="info">
          Se agrego correctamente 
        </Alert>
        </div>
        :<></>
    }
        </>
    )
}