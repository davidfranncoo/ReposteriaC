import React from "react";
import "./cardproduct.css"

export default function CardProduct({name,img}){

    return (
        <div className="cardproduct">
            <img src={img} alt="imagen not found"/>
            <h2>{name}</h2>
            <button>comprar</button>
        </div>
    )
}