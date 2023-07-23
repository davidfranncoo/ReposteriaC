import React, { useEffect, useState } from "react";
import Nav from "../Nav/nav"
import CardProduct from "../CardProduc/cardproduct.jsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import categoryProduct from "../../action/categoryproduct"


export default function Productos(){

const params=useParams()
console.log("parametrooo",params.category)


const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await categoryProduct(params.category);
        await console.log("1111",data)
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

            <CardProduct/>

        </div>
    )
}