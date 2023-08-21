import React, { useEffect, useState } from "react";
import Nav from "../Nav/nav"
import "./producto.css"
import {Link} from "react-router-dom";
import { seachProduct } from "../../action";
import CardProduct from "../CardProduc/cardproduct.jsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
//import categoryProduct from "../../action/categoryproduct"
import { useDispatch, useSelector } from "react-redux";


export default function Productos(){
const dispatch=useDispatch()
const params=useParams()
const productData=useSelector((state)=>state.productSeach)||[];
console.log("prod",productData)

//const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    dispatch(seachProduct(params)).then(()=>setLoading(false))


    // const fetchData = async () => {
    //   try {
    //     const dataUrl = await categoryProduct(params.category);
  
    //     //setProductData(dataUrl);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error al obtener los datos", error);
    //     setLoading(false);
    //   }
    // };

    // fetchData();
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

              <CardProduct key={index} name={e.name} img={e.img}/> 
              </Link>
              )
            })
         }
            </div>
      )}
         

        </div>
    )
}