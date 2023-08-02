import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";
import GetCarrito from "../../action/getcarrito";
import CardCarrito from "../CarCarrito/carcarrito";

export default function Carrito(){
    
        const [infoCarrito, setCarrito] = useState([]);
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
        loading===true || infoCarrito.length===0?
         <div>No hay productos</div>
         :
         
         <div>
          
            <CardCarrito data={infoCarrito}/>
         </div>   

    }
        
        </div>
    )


}