import React, {useState, useEffect}from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Nav/nav";
import GetDetail from "../../action/detailcard"
import "./detailcard.css"

export default function DetailCard(){



    const params=useParams()


    const [productData, setProductData] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
     
      const fetchData = async () => {
        try {
          const data = await GetDetail(params.id);
          setProductData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error al obtener los datos", error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    function mostrarAlerta(e){
      e.preventDefault()
      alert("se agreago correctamente el producto")
    }




    return (
        <div>
            <Nav/>

           
            {loading === true ? (
        <div>cargandoooo</div>
      ) : (
        <>

         <div className="details">
          <div>

         <h2> {productData[0].name}
         </h2>

         <img src={productData[0].img}></img>
          </div>
          <div>


            <form className="formulario">
            <h3>Elije los detalles de tu {productData[0].name}</h3>

            <label for="cantidad">Peso:
            <input type="number" id="cantidad" name="cantidad" max="20" min="1"  step="1"/>
             kg.</label>
            <label for="sabor">Bizcochuelo de:</label>
              <select id="sabor" name="sabor">
                  <option value="chocolate">Chocolate</option>
                  <option value="vainilla">Vainilla</option>
                  <option value="naranja">Naranaja</option>
                  <option value="limon">Limon</option>
                </select>
                <label for="sabor">Primer relleno:</label>
              <select id="relleno1" name="" >
                  <option value="Moussechocolate">Mouses de chocolate</option>
                  <option value="Moussedulce">Mouses de dulce de leche</option>
                  <option value="ddl">Dulce de leche</option>
                  <option value="ddlyd">Dulce de Leche y Durazno</option>
                  <option value="chagra">Chantilly Granizados</option>
                  <option value="naranja"></option>
                </select>
                <label for="sabor">Segundo relleno:</label>
              <select id="relleno1" name="">
                  <option value="Moussechocolate">Mouses de chocolate</option>
                  <option value="Moussedulce">Mouses de dulce de leche</option>
                  <option value="ddl">Dulce de leche</option>
                  <option value="ddlyd">Dulce de Leche y Durazno</option>
                  <option value="chagra">Chantilly Granizados</option>
                  <option value="naranja"></option>
                </select>
                <label for="texto">Detalles que quieras que agreguemos:</label>
              <input type="text" id="texto" name="texto"></input>
              <h2>Total: $100</h2>

            <button>Comprar</button>
            <button onclick={(e)=>mostrarAlerta(e)}>Agregar al Carrito</button>
            </form>
          </div>
         </div>






        </>
      )}
            </div>
    )
}