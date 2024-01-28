import React from "react";
import "./carcarrito.css";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { deleteCarritoUni } from "../../action";

export default function CardCarrito({ name, precio, img, id, oneDelete }) {
  const dispatch = useDispatch();

  function hanlerDelete() {
    dispatch(deleteCarritoUni(id));

    oneDelete();
  }

  return (
    <div className=" one-store d-flex align-items-center justify-content-around">
      <img className="w-25 " src={img} />
      <h6>{name}</h6>
      <h1>${precio}</h1>
      <Button onClick={hanlerDelete}> eliminar</Button>
    </div>
  );
}
