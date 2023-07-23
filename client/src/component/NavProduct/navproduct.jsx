import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./navproduct.css"


export default function NavProduct({data,categoria}){


    const product=[]
     data.map((e)=>{
      if(e.category===categoria){
        product.push(e)
      }  
    })
    
   
    return (
        <div>
            <div className="div_product">
                <h2>{categoria}</h2>
                <Link to={"/product/"+ categoria}>
                    <button>Ver mas</button>
                    </Link>
            </div>
            <div className="div_img">
                 
              <img src={product[0].img} alt="torta1"></img>  
              <img src={product[1].img} alt="imagen1"></img>  
              <img src={product[2].img} alt="imagen1"></img> 
              <img src={product[3].img} alt="imagen1"></img> 
              
            </div>

        </div>


    )
}