import React, {useState, useEffect}from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Nav/nav";
import GetDetail from "../../action/detailcard"
import "./detailcard.css"

export default function DetailCard(){
  
  const precio=1900;
  
  // -------------------------- OBTENER INFORMACION------------------- 
  
  
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
  
  const [form, setForm] = useState({
    id: "",
    precio:"",
    descripcion:[]
  });

  const [contador,setContador]=useState(0)


  
  /*----------------------- CARGAR INFORMACION EN EL IMPUT --------------------------------------------------  */
    
    function handlerForm(e){
      //setForm({...form,[e.target.id]:e.target.value})
      console.log("2console", form)
    }
/*----------------------- CARGAR DESCRIPCION(DETALLES DE LA TORTA) --------------------------------------------------  */

  function handerDetail(e){
    const  updateDestail=[...form.descripcion]
      updateDestail.push({id:e.target.id,value:e.target.value})
      setForm({...form,descripcion:updateDestail})
      console.log("1111111",form)
    }

  function handlerSubmit(e){
    e.preventDefault()
    setForm({...form,id:productData[0].id})
    
      console.log("terminadoooo",form)
      console.log("terminadoooo",e)
    setForm({
    id: "",
    precio:"",
    descripcion:[]})



    alert("Agregado al carrito");

  // Redirigimos al usuario a la página de inicio
  window.history.back()
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
              <h2> {productData[0].name}</h2>
                <img src={productData[0].img}></img>
          </div>

{/*-----------------------FORMULARIO  --------------------------------------------------  */}

          <div>
            <form className="formulario" onSubmit={(e)=>handlerSubmit(e)}>
            <h3>Elije los detalles de tu {productData[0].name}</h3>
            <label for="cantidad" 
            // id="precio"
            // onChange={(e)=>{handlerForm(e)}}
            >Peso:
            <input type="number" id="cantidad" name="cantidad" max="20" min="1"  step="1"/>
             kg.</label>

{/*-------------------------------------------------------------------------  */}

            <label for="bizcochuelo">Bizcochuelo de:</label>
              <select 
              id="bizcochuelo" 
              
              name=""
              onChange={(e)=>{handerDetail(e)}}>

                  <option disabled selected hidden></option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Vainilla">Vainilla</option>
                  <option value="Naranja">Naranaja</option>
                  <option value="Limon">Limon</option>
                </select>
{/*-----------------------  --------------------------------------------------  */}

              
            <label for="sabor">Segundo relleno:</label>
              <select 
              id="relleno1" 
              onChange={(e)=>{handerDetail(e)}}
              name="">
     
                  <option disabled selected hidden></option>
                  <option value="1.Mouses de chocolate">Mouses de chocolate</option>
                  <option value="1.Mouses de dulce de leche">Mouses de dulce de leche</option>
                  <option value="1.Dulce de leche">Dulce de leche</option>
                  <option value="1.Dulce de Leche y Durazno">Dulce de Leche y Durazno</option>
                  <option value="1.Chantilly Granizados">Chantilly Granizados</option>
                 
                </select>
{/*-----------------------  --------------------------------------------------  */}

            <label for="sabor">Segundo relleno:</label>
              <select 
              id="relleno2" 
              onChange={(e)=>{handerDetail(e)}}
              name="">
                  
                  <option disabled selected hidden></option>
                  <option value="2.Mouses de chocolate">Mouses de chocolate</option>
                  <option value="2.MMouses de dulce de leche">Mouses de dulce de leche</option>
                  <option value="2.Dulce de leche">Dulce de leche</option>
                  <option value="2.Dulce de Leche y Durazno">Dulce de Leche y Durazno</option>
                  <option value="2.Chantilly Granizados">Chantilly Granizados</option>
                 
                </select>
{/*-----------------------  --------------------------------------------------  */}

                <label for="texto">Detalles que quieras que agreguemos:</label>
              <input type="text" id="texto" name="texto"></input>
              <h2>Total: ${precio}</h2>

{/*----------------------- BOTONES --------------------------------------------------  */}

            <button>Comprar</button>
            <button className="boton"  type="submit">Agregar al Carrito</button>
            </form>
          </div>
         </div>
        </>
      )}
            </div>
    )
}