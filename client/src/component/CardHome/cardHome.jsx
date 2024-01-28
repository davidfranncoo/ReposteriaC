import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./cardHome.css";

export default function CardHome({ categori,name, img, preciouni }) {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/products/"+ categori);
  }

  return (
    <div className="home-card">
      <img className="" src={img} alt={name} />
      <h6 className="text-center">{name}</h6>
      <h4>${preciouni}</h4>
      <Button className="button_compra" onClick={handleSubmit}>
        Comprar
      </Button>
    </div>
  );
}