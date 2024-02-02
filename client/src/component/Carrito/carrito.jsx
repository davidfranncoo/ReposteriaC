import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";
import img1 from "../../Img/cupacake.jpg";
import "./carrito.css";
import Button from "react-bootstrap/Button";
import Loading from "../Loading/loading.jsx"


import CardCarrito from "../CarCarrito/carcarrito";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCarrito, deleteOneCarrito, getCarrito } from "../../action";

export default function Carrito() {
  const dispatch = useDispatch();
  const infoCarrito = useSelector((state) => state.myCarrito) || [];
  const [loading, setLoading] = useState(true);
  const [acc, setAcc] = useState(0);
  const [infoLoading, setInfoLoading] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("TOKEN");

    if (token && loading) {
      dispatch(getCarrito()).then(() => setLoading(false));
    }

    if (infoCarrito[0] !== undefined && !infoLoading) {
      setInfoLoading(true);

      const total =
        infoCarrito && infoCarrito[0] && infoCarrito[0].Carritos
          ? infoCarrito[0].Carritos.reduce((sum, e) => {
              const precioProducto = parseFloat(e.Products[0].preciouni) || 0;
              return sum + precioProducto;
            }, 0)
          : 0;

      setAcc(total);
      setInfoLoading(false);
    }
  }, [loading, infoCarrito, infoLoading, dispatch]);

  function hanlerDelete(index) {
    const info1 = infoCarrito[0].Carritos.filter((e) => e.id !== index);

    const info = infoCarrito;

    info[0].Carritos = info1;

    // Actualiza el estado con el nuevo array filtrado
    dispatch(deleteOneCarrito(info));
    setLoading(true);
  }
  function hanlerCompra() {
    const ids = [];
    const info = infoCarrito;
    const info1 = [];
    infoCarrito[0].Carritos.map((e) => {
      ids.push(e.id);
    });

    info[0].Carritos = info1;
    // info[0].Carritos = [];
    dispatch(deleteOneCarrito(info1));
    dispatch(deleteAllCarrito(ids));
    setLoading(true);
    alert("gracias por su compra");
  }
 
  return (
    <>
      <Nav />
    <div className="carrito-div">
      {loading === true || infoLoading === true ? (
       <Loading/>
      ) : (
        <div className="bg-white"> 
          <div className="bg-info d-flex justify-content-around">
            <h2 >Producto</h2>
            <h2 >Deralle</h2>
            <h2 >Precio</h2>
            <h2 >Eliminar</h2>
          </div>
          <div>
            {infoCarrito &&
            infoCarrito[0] &&
            infoCarrito[0].Carritos &&
            infoCarrito[0].Carritos.length === 0 ? (
              <div className="p-3">Agregar Producto</div>
            ) : (
              infoCarrito &&
              infoCarrito[0] &&
              infoCarrito[0].Carritos &&
              infoCarrito[0].Carritos.map((e) => (
                <CardCarrito
                  key={e.id}
                  id={e.id}
                  name={e.Products[0].name}
                  img={e.Products[0].img}
                  precio={e.Products[0].preciouni}
                  oneDelete={() => hanlerDelete(e.id)}
                />
              ))
            )}
          </div>
          <div className="boton-comprar">

          <br />
          <div className="bg-info d-flex justify-content-between mb-2 ">
          <h1 className=" pt-2 pl-2" >Total
            </h1>
            <h1 className=" pt-2 pl-2">
           ${acc}</h1>

          </div>
          <Button onClick={hanlerCompra}>Comprar</Button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
