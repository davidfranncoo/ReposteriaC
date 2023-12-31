import React from "react";
import "./carcarrito.css";
import { useDispatch } from "react-redux";
import { deleteCarritoUni } from "../../action";

export default function CardCarrito({ name, precio, img, id, oneDelete }) {
  const dispatch = useDispatch();

  function hanlerDelete() {
    dispatch(deleteCarritoUni(id));

    oneDelete();
  }

  return (
    <div className="d-flex align-items-center justify-content-around">
      <img className="w-25" src={img} />
      <h6>{name}</h6>
      <h1>${precio}</h1>
      <button onClick={hanlerDelete}> eliminar</button>
    </div>
  );
}
