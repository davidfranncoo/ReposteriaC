import React from "react";
import "./loading.css"
export default function loading(){
    return (
<div className="loading-overlay">
  <div className="loading"></div>
  <p className="loading-text">Cargando...</p>
</div>
    )
}