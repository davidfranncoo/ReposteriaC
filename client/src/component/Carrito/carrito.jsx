import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";

import CardCarrito from "../CarCarrito/carcarrito";
import { useDispatch, useSelector } from "react-redux";
import { getCarrito } from "../../action";

export default function Carrito() {
  const dispatch = useDispatch();
  const infoCarrito = useSelector((state) => state.myCarrito) || [];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCarrito()).then(() => setLoading(false));
  }, []);
  console.log("######", infoCarrito);

  return (
    <div>
      <Nav />
      {loading === true || infoCarrito.length === 0 ? (
        <div>No hay productos</div>
      ) : (
        <div>
          <CardCarrito data={infoCarrito} />
        </div>
      )}
    </div>
  );
}
