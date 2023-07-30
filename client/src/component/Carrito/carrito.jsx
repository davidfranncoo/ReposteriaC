import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";
import GetCarrito from "../../action/getcarrito";

export default function Carrito(){
    
        const [infoCarrito, setCarrito] = useState();
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const data = await GetCarrito();
              setCarrito(data);
              setLoading(false);
            } catch (error) {
              console.error("Error al obtener los datos", error);
              setLoading(false);
            }
          };
      
          fetchData();
        }, []);
        console.log("######",infoCarrito)

    return(
        <div>
           <Nav/>  
    {
        loading===true?
         <div>cargando</div>
         :
         <div> <h1>Productos en el carrito</h1>
         <main>
          <img src=""/>
          <h2>detalle</h2>
          <h2>precio</h2>


          <h3>el total es $1000</h3>
          <button>pagar</button>
         </main></div>   

    }
        
        </div>
    )


}