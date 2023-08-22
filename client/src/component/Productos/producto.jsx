import React, { useEffect, useState } from "react";
import Nav from "../Nav/nav";
import "./producto.css";
import { Link } from "react-router-dom";
import { seachProduct } from "../../action";
import CardProduct from "../CardProduc/cardproduct.jsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

export default function Productos() {
  const dispatch = useDispatch();
  const params = useParams();
  const productData = useSelector((state) => state.productSeach) || [];
 

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(seachProduct(params)).then(() => setLoading(false));
  }, []);

  return (
    <div>
      <Nav />
      PRODUCTOS
      {loading === true ? (
        <div>cargandoooo</div>
      ) : (
        <div className="div_producto">
          {productData.map((e) => (
            <Link key={e.id} to={"/detail/" + e.id}>
              <CardProduct name={e.name} img={e.img} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
 
  
  
}
