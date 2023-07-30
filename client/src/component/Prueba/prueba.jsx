import React,{useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Nav/nav";
import GetDetail from "../../action/detailcard";

import sendProduct from "../../action/sendProduct";
import { useEffect } from "react";

export default function Prueba() {
    const preciotorta=1900
    const [precio,setprecio]=useState(preciotorta)
    
    const [form, setForm] = useState({
        idname: "",
        precio: precio,
        descripcion: [],
        descripcion2: "",
      });

    function handlerDescripcion2(e){
        console.log("e",e.target.value)
        setForm({...form,descripcion2:e.target.value})
    }  
   
    function handlerDescripcion(e){
        console.log("descripcion",e.target.value)
        setForm({...form,descripcion:e.target.value})
      
    }
    function handlerPrecio(e){
        console.log("console de precio",e.target.value)
        const kg=e.target.value
        const total=kg*precio
        setprecio(total)
        setForm({...form,precio:total})
        
    }

    function handlerSubmit(e){
        e.preventDefault();
        setForm({...form,precio:precio})
        console.log("submit del formulario",form)
    }



    return (
        <div>
               <form className="formulario" onSubmit={(e) => handlerSubmit(e)}>
                <h3>Elije los detalles de tu torta</h3>



                <label
                  htmlFor="cantidad"
                  // id="precio"
                  onChange={(e) => {
                    handlerPrecio(e);
                  }}
                >
                  Peso:
                  <input
                    type="number"
                    id="inp"
                    name="cantidad"
                    max="50"
                    min="1"
                    step="1"
                    defaultValue="1"
                  />
                  kg.
                </label>


                <label>Nombre de la Actividad 
                <input
                className="input" 
                type="text" 
                placeholder="name"
                name="name"
               
                onChange={(e)=>handlerDescripcion2(e)}></input></label>



                <label htmlFor="bizcochuelo">Bizcochuelo de:</label>
                <select
                  id="bizcochuelo"
                  onChange={(e) => {
                    handlerDescripcion(e);
                  }}
                >
                  
                  
                  <option value="" defaultValue></option>
                  <option value="Vainilla">Vainilla</option>
                  <option value="Naranja">Naranaja</option>
                  <option value="Limon">Limon</option>
                </select> 
              
                <h2>Total: ${precio}</h2>

                {/*----------------------- BOTONES --------------------------------------------------  */}

                <button>Comprar</button>
                <button className="boton" type="submit">
                  Agregar al Carrito
                </button>
              </form>
        </div>
    )
}