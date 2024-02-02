import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";
import img1 from "../../Img/cupacake.jpg";
import "./carrito.css";
import Button from "react-bootstrap/Button";
import Loading from "../Loading/loading.jsx";
import Footer from"../Footer/footer.jsx"



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
          <Loading />
        ) : (
          <div className="bg-white">
            <div className="bg-info d-flex justify-content-around">
              <h3>PRODUCTO</h3>
              <h3>DETALLE</h3>
              <h3>PRECIO</h3>
              
              <h3>ELIMINAR</h3>
              
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
              <div className="bg-info d-flex justify-content-between mb-2">
                <h1 className="pt-2 pl-2">Total</h1>
                <h1 className="pt-2 pl-2">${acc}</h1>
              </div>
              <Button onClick={hanlerCompra} 
              disabled={
            
                infoCarrito[0].Carritos.length === 0
              }>Comprar</Button>
            </div>
          </div>
        )}
        
      </div>
      <div className="custom-shape-divider-bottom-1700336914">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
      <Footer></Footer>
    </>
  ); 
}
