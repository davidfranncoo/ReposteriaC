import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Nav/nav";
import GetDetail from "../../action/detailcard";
import "./detailcard.css";
import sendProduct from "../../action/sendProduct";

export default function DetailCard() {
  const precio = 1900;

  // -------------------------- OBTENER INFORMACION-------------------

  const params = useParams();
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
  

  const [contador, setContador] = useState(precio);
  const [form, setForm] = useState({
    idname: "",
    precio: contador,
    descripcion: [],
    texto:""
   
  });



  /*----------------------- CARGAR INFORMACION EN EL IMPUT --------------------------------------------------  */
 
 
function handlerPrecio(e){
  const kg = e.target.value;
  const total= kg * precio;
  setContador(total);
  setForm({...form,precio:total,idname:productData[0].id})
  
  
}

  /*----------------------- CARGAR DESCRIPCION(DETALLES DE LA TORTA) --------------------------------------------------  */

  function handerDetail(e) {
 
    const detail=e.target.value;
    const idd=e.target.id;
    const detail2=form.descripcion
   
  
     const detail3= detail2.filter((c)=>c.id!==idd)
  
    detail3.push({id:e.target.id,value:e.target.value})
    setForm({...form,descripcion:detail3})
   
  }
  function handerlTexto(e){
    setForm({...form,texto:e.target.value})
  }

  function handlerSubmit(e) {
    e.preventDefault();

   sendProduct(form)
    setForm({
      idname: "",
      precio: "",
      descripcion: [],
    });
    alert("Agregado al carrito");
    // Redirigimos al usuario a la página de inicio
     window.history.back();
  }

  return (
    <div>
      <Nav />
      {loading === true ? (
        <div>cargandoooo</div>
      ) : (
        <>
          <div className="details">
            <div>
              <h2> {productData[0].name}</h2>
              <img src={productData[0].img}></img>
            </div>

            {/*-----------------------FORMULARIO  --------------------------------------------------  */}

            <div>
              <form className="formulario" onSubmit={(e) => handlerSubmit(e)}>
                <h3>Elije los detalles de tu {productData[0].name}</h3>






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

                {/*-------------------------------------------------------------------------  */}

                <label htmlFor="bizcochuelo">Bizcochuelo de:</label>
                <select
                  id="bizcochuelo"
                 
                  onChange={(e) => {
                    handerDetail(e);
                  }}
                >
                  
                  <option value="" defaultValue></option>
                  
                  <option value="Chocolate" >Chocolate</option>
                  <option value="Vainilla">Vainilla</option>
                  <option value="Naranja">Naranaja</option>
                  <option value="Limon">Limon</option>
                </select>
                {/*-----------------------  --------------------------------------------------  */}

                <label htmlFor="sabor">Segundo relleno:</label>
                <select
                  id="relleno1"
                  onChange={(e) => {
                    handerDetail(e);
                  }}
                  name=""
                >
                  <option value="" defaultValue></option>
                
                  <option value="1.Mouses de chocolate">
                    Mouses de chocolate
                  </option>
                  <option value="1.Mouses de dulce de leche">
                    Mouses de dulce de leche
                  </option>
                  <option value="1.Dulce de leche">Dulce de leche</option>
                  <option value="1.Dulce de Leche y Durazno">
                    Dulce de Leche y Durazno
                  </option>
                  <option value="1.Chantilly Granizados">
                    Chantilly Granizados
                  </option>
                </select>
                {/*-----------------------  --------------------------------------------------  */}

                <label htmlFor="sabor">Segundo relleno:</label>
                <select
                  id="relleno2"
                  onChange={(e) => {
                    handerDetail(e);
                  }}
                  name=""
                >
                    <option value="" defaultValue></option>

                  <option value="2.Mouses de chocolate" >
                    Mouses de chocolate
                  </option>
                  <option value="2.MMouses de dulce de leche">
                    Mouses de dulce de leche
                  </option>
                  <option value="2.Dulce de leche">Dulce de leche</option>
                  <option value="2.Dulce de Leche y Durazno">
                    Dulce de Leche y Durazno
                  </option>
                  <option value="2.Chantilly Granizados">
                    Chantilly Granizados
                  </option>
                </select>
                {/*-----------------------  --------------------------------------------------  */}

                <label htmlFor="texto">Detalles que quieras que agreguemos:</label>
                <input type="text" id="texto" name="texto" onChange={(e)=>{handerlTexto(e)}}></input>
                <h2>Total: ${contador}</h2>

                {/*----------------------- BOTONES --------------------------------------------------  */}

                <button>Comprar</button>
                <button className="boton" type="submit">
                  Agregar al Carrito
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
