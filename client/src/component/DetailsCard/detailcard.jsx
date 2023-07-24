import React, {useState, useEffect}from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Nav/nav";
import GetDetail from "../../action/detailcard"

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
  
    return (
        <div>
            <Nav/>

            SOY EL DETALLE DE ESTE PRODUCTO
            {loading === true ? (
        <div>cargandoooo</div>
      ) : (
        
         <img src={productData[0].img}></img>
      )}
            </div>
    )
}