import React, { useEffect, useState } from "react";
import "./carcarrito.css";


export default function CardCarrito({name,precio,img}) {
  console.log("holaaaa")
 
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const newTotal = product.reduce((acumulador, e) => {
  //     const strin = e.precio;
  //     const numbe = parseFloat(strin);
  //     return acumulador + numbe;
  //   }, 0);

  //   setTotal(newTotal);
  // }, [product]);

  return (
   
      <div className="d-flex align-items-center justify-content-around">
        <img className="w-25" src={img} />
        <h6>{name}</h6>
        <h1>${precio}</h1>
        <button>eliminar</button>
      </div>
   
  );
}
