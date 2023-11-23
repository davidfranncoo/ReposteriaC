import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Nav from "../Nav/nav";
import "./cardProduct.css";
import { getDetail, getProduct } from "../../action";
import Productone from "../oneProduct/oneProduct";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function cardProduct() {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();

  const info = useSelector((state) => state.product) || [];
  const producdata = info.filter((e) => e.category === params.category);


  const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImYiLCJpZCI6IjczM2RjNzFlLWQ0NTktNDRkMC04MmNmLTBlZjA3MmQ5NjliOCIsImlhdCI6MTcwMDc2MTM2M30.0xiqs9AokNgvKVmi4lY2cO_UFHhE1RKNDlXhmopGGOY";

  useEffect(() => {
    dispatch(getProduct()).then(() => setLoading(false));
  }, []);
  // useEffect(() => {
  //   dispatch(getDetail(params.category, Token)).then(() => setLoading(false));
  // }, []);

  return (
    <div>
      <div>
        <Nav />
        {loading === true ? (
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
