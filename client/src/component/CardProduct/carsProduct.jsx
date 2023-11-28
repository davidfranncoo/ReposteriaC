import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import NavBar from "../Nav/nav";
import "./cardProduct.css";
import { getLogin, getProduct } from "../../action";
import Productone from "../oneProduct/oneProduct";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export default function cardProduct() {
  const [loading, setLoading] = useState(true);
 
  const params = useParams();
  const dispatch = useDispatch();

  const info = useSelector((state) => state.product) || [];
  const login = useSelector((state) => state.login) || true;
  
  const producdata = info.filter((e) => e.category === params.category);


  const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImYiLCJpZCI6IjczM2RjNzFlLWQ0NTktNDRkMC04MmNmLTBlZjA3MmQ5NjliOCIsImlhdCI6MTcwMDc2MTM2M30.0xiqs9AokNgvKVmi4lY2cO_UFHhE1RKNDlXhmopGGOY";

  useEffect(() => {
    dispatch(getProduct()).then(() => setLoading(false))
    dispatch(getLogin())
    if(login==='ERROR_LOGIN'){
      alert("debes iniciar sesion")
      window.location.href = "/login";
    }
  }, [login]);

  return (
    <div>
      <div>
        <NavBar />
        {loading=== true || login===true || login=== 'ERROR_LOGIN'? (
          <h1>cargandooo</h1>
        ) : (
          <Row className="row_Card">
            {producdata.map((e, index) => {
              return (
                <Col   key={e.id} className="  columna_producto d-flex flex-column align-items-center">
                  <Productone  id={e.id} img={e.img} name={e.name} precio2={e.preciouni} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
}
