import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Nav from "../Nav/nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alerta from "../Alerta/alerta.jsx"
import "./oneProduct.css";

import { getDetail, sendProduct } from "../../action";

export default function OneProduct({ id, name, img, precio2 }) {
  const sinparsear = window.localStorage.getItem("TOKEN");
  const Token = JSON.parse(sinparsear);

  const [precio, setPrecio] = useState(precio2);
  const [alerta,setAlerta]=useState(false)
  const [contador, setContador] = useState(1);
  const [product, setProduct] = useState({
    idname: id, // aquí puedes utilizar el id del producto si lo tienes
    precio: precio2,
    descripcion: [],
    texto: true,
  });

  function handlerConter(e) {
    if (e.target.innerText === "+") {
      var acc = contador + 1;
      setContador(acc);
      var acc2 = precio2 * acc;
      setPrecio(acc2);
      setProduct({ ...product, precio: acc2 });
    }

    if (e.target.innerText === "-" && contador > 1) {
      var acc = contador - 1;
      setContador(acc);
      var acc2 = precio2 * acc;
      setPrecio(acc2);
      setProduct({ ...product, precio: acc2 });
    }
  }

  function handlerSubmit(e) {
    e.preventDefault();
    sendProduct(product, Token);

    setProduct({
      idname: id, // aquí puedes utilizar el id del producto si lo tienes
      precio: precio2,
      descripcion: [],
      texto: true,
    });
    setPrecio(precio2);
    setContador(1);
    setAlerta(true) 


     setTimeout(() => {
      setAlerta(false);
    }, 3000);

    
  }

  return (
    <div className=" pt-2 div_card_product">
      <Card className="responsive-card">
        {
          alerta==true?
          <Alerta tipo={"agrego_producto"}/>
        :
        <></>
        }
        <Card.Img className="img_cardProduct2" variant="top" src={img} />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Title className="title_card">${precio}</Card.Title>

        

          <div className="input-group ">
            <Button
              className="btn btn-outline-secondary"
              variant="info"
              type="button"
              onClick={(e) => {
                handlerConter(e);
              }}
            >
              -
            </Button>
                <div className="d-flex align-items-end">

            <h5  className="contador-card">{contador}</h5>
                </div>

            
        

            <Button
              className="btn btn-outline-secondary"
              variant="info"
              type="button"
              onClick={(e) => {
                handlerConter(e);
              }}
            >
              +
            </Button>
           

            <Button
              variant="primary"
              // className="button_compra2"
               type="button"
               onClick={(e) => handlerSubmit(e)}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/* 
      <Image className="img_cardProduct2" src={img} />
      <h6 className="text-center ">{name}</h6>
      <div className="d-flex align-items-center ">
        <h4 className="precio_card">${precio} </h4>
        <h4 className="precio_card2">ARS </h4>
      </div> */}

      {/* <div className="div_contador d-flex">
        <div className="div2-contador d-flex justify-content-around align-items-center">
          <button
            className="input_number"
            onClick={(e) => {
              handlerConter(e);
            }}
          >
            <h6>-</h6>
          </button>
          <h5 className="h6_contador">{contador}</h5>
          <button
            className="input_number"
            onClick={(e) => {
              handlerConter(e);
            }}
          >
            <h6>+</h6>
          </button>
        </div>

        <button
          className="button_compra2"
          type="button"
          onClick={(e) => handlerSubmit(e)}
        >
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>  */}
    </div>
  );
}
