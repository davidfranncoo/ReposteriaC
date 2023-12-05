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
  const [acc, setAcc] = useState(0);
  const [infoLoading, setinfoLoading] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("TOKEN");

    if (token) {
      dispatch(getCarrito()).then(() => setLoading(false));

      if (infoCarrito[0] != undefined) {
        console.log("0000", infoCarrito[0].Carritos[0].id)
        setinfoLoading(true);
        
        const total = infoCarrito[0].Carritos.reduce((sum, e) => {
          // Suponiendo que 'e.Products[0].preciouni' contiene el precio del producto
          const precioProducto = parseFloat(e.Products[0].preciouni) || 0;
          return sum + precioProducto;
        }, 0);

        // Establecer el total en el estado
        setAcc(total);
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
          <div>
            {infoCarrito[0].Carritos.map((e) => {
              return (
                <CardCarrito
                 id={e.id}
                  name={e.Products[0].name}
                  img={e.Products[0].img}
                  precio={e.Products[0].preciouni}
                />
              );
            })}
          </div>
          <br />
          <h1>total ${acc}</h1>
          <Button>Comprar</Button>
        </div>
      )}
    </div>
  );
}
