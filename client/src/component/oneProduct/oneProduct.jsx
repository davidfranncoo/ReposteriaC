import React,{useState} from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Nav from "../Nav/nav";
import "./oneProduct.css"
import { getDetail, sendProduct } from "../../action";


export default function oneProduct({id,name,img,precio2}){





    const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImYiLCJpZCI6IjczM2RjNzFlLWQ0NTktNDRkMC04MmNmLTBlZjA3MmQ5NjliOCIsImlhdCI6MTcwMDc2MTM2M30.0xiqs9AokNgvKVmi4lY2cO_UFHhE1RKNDlXhmopGGOY";
 
 
    const es = precio2; //!recibo precio, nombre de torta, img, id
  const [precio, setPrecio] = useState(es);
  const [contador, setContador] = useState(1);
  const [product, setProduct] = useState({
    idname: "fd043f0a-495d-49bd-a8bc-f815815e51bd",
    precio: es,
    descripcion: [],
    texto: true,
  });

  function handlerConter(e) {
    if (e.target.innerText === "+") {
      var acc = contador + 1;
      setContador(acc);
      var acc2 = es * acc;
      setPrecio(acc2);
      setProduct({ ...product, precio: acc2 });
    }

    if (e.target.innerText === "-" && contador > 1) {
      var acc = contador - 1;
      setContador(acc);
      var acc2 = es * acc;
      console.log("esto es acc2",acc2)
      setPrecio(acc2);
      setProduct({ ...product, precio: acc2 });
    }
  }
  function handlerSubmit(e) {
    e.preventDefault();
    sendProduct(product, Token);
    console.log("esto es set product ",product)
    setProduct({
      idname: "fd043f0a-495d-49bd-a8bc-f815815e51bd",
      precio: es,
      descripcion: [],
      texto: true,
    });
    setPrecio(es)
    setContador(1)
    return alert("se agrego correctamente al carrito")
  }


  return (

     
      <div className="pt-2 div_card_product">
        
         
           
              <Image
                className="img_cardProduct"
                src={img}
              />
              <h6 className="text-center ">{name}</h6>
              <div className="d-flex align-items-center ">
                <h4 className="precio_card">${precio2} </h4>
                <h4 className="precio_card2">ARS </h4>
              </div>

              <div className="div_contador ">
                <div
                  className="div2-contador d-flex 
              justify-content-around align-items-center"
                >
                  <button
                    className="input_number"
                    onClick={(e) => {
                      handlerConter(e);
                    }}
                  >
                    <h6>-</h6>
                  </button>
                  <h5 className="h6_contador">{contador}</h5>
                  <button
                    className="input_number"
                    onClick={(e) => {
                      handlerConter(e);
                    }}
                  >
                    <h6>+</h6>
                  </button>
                </div>


                
                <button className="button_compra2" type="button" onClick={(e)=>handlerSubmit(e)}>
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </button>
              </div>
           
    
      
      </div>
   
  );


}