import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./navproduct.css"


export default function NavProduct(){



    return (
        <div>
            <di className="div_product">
                <h2>Tostas</h2>
                <Link to="/productos">
                    <button>Ver mas</button>
                    </Link>
            </di>
            <div className="div_img">
                 
              <img src="https://i.pinimg.com/564x/92/53/60/925360679a61bd2815cebb907263f4a1.jpg" alt="torta1"></img>  
              <img src="https://i.pinimg.com/564x/7f/17/fe/7f17feae04ca59f5d703fb0e0dc3d24f.jpg" alt="imagen1"></img>  
              <img src="https://i.pinimg.com/564x/ac/d5/04/acd50476fd6fedb17d3da239b89016a5.jpg" alt="imagen1"></img>  
              
            </div>

        </div>


    )
}