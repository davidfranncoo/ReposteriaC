import React, { useEffect, useState } from "react";
import "./carcarrito.css"

export default function CardCarrito(props){
    const product=props.data
    const [total,setTotal]=useState(0)
  

   useEffect(() => {
    const newTotal = product.reduce((acumulador, e) => {
      const strin = e.precio;
      const numbe = parseFloat(strin);
      return acumulador + numbe;
    }, 0);
  
    setTotal(newTotal);
  }, [product]);





    return (
        <div>
        
          {
            product.map((e)=>{
                return (
                    <div key={e.id} className="cardcarrito">
                        <img src={e.Products[0].img}/>
                        <h3>{e.Products[0].name}</h3>
                        <h2>$ {e.precio}</h2>
                    </div>
                )
            })
          }
            <h1>total es $ {total}</h1>
            <button>comprar</button>
        </div>
    )
}