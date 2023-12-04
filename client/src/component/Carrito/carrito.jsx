import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";
import img1 from "../../Img/cupacake.jpg";
import "./carrito.css";
import Button from "react-bootstrap/Button";

import CardCarrito from "../CarCarrito/carcarrito";
import { useDispatch, useSelector } from "react-redux";
import { getCarrito } from "../../action";

export default function Carrito() {
  const dispatch = useDispatch();
  const infoCarrito = useSelector((state) => state.myCarrito) || [];
  const [loading, setLoading] = useState(true);
  const [infoLoading, setinfoLoading] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("TOKEN");

    if (token) {
      dispatch(getCarrito()).then(() => setLoading(false));

      if (infoCarrito[0] != undefined) {
        setinfoLoading(true);
        console.log("dataaa");
      }
    }
  }, [loading]);

  return (
    <div>
      <Nav />
      {loading === true || infoLoading === false ? (
        <div>No hay productos</div>
      ) : (
        <div>
          <div className="d-flex align-items-center justify-content-around">
            <img className="w-25" src={img1} />
            <h6>tota alta</h6>
            <h1>$150</h1>
            <button>eliminar</button>
          </div>

          <div>
            {infoCarrito[0].Carritos.map((e) => {
              return (
                <CardCarrito
                  key={e.Products[0].idname}
                  name={e.Products[0].name}
                  img={e.Products[0].img}
                  precio={e.Products[0].preciouni}
                />
              );
            })}
          </div>
          <Button>Comprar</Button>
        </div>
      )}
    </div>
  );
}
