import React, { useEffect, useState } from "react";
import Nav from "../Nav/nav"
import "./producto.css"
import {Link} from "react-router-dom";

import CardProduct from "../CardProduc/cardproduct.jsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import categoryProduct from "../../action/categoryproduct"


export default function Productos(){

const params=useParams()


const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await categoryProduct(params.category);
  
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


    return(

        <div>
            <Nav/>
            PRODUCTOS
       
        {loading === true ? (
        <div>cargandoooo</div>
      ) : (
        
         <div className="div_producto">

       {   productData.map((e,index)=>{
            return(
              <Link to={"/detail/" + e.id}>

              <CardProduct key={e.index} name={e.name} img={e.img}/> 
              </Link>
              )
            })
         }
            </div>
      )}
         

        </div>
    )
}