//para trar reac ponemos rafce
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../action/index";
import Nav from "../Nav/nav";
import NavProduct from "../NavProduct/navproduct";

export default function Home() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product) || [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProduct()).then(() => setLoading(false));
  }, []);

  return (
    <div>
      <Nav />
      <header>CARRUCEL</header>
      <br></br>
      <br></br>
      <br></br>
      <button>pruebas</button>
      {loading === true ? (
        <div>cargandoooo</div>
      ) : (
        <div>
          <main>
            <NavProduct data={productData} categoria="tortas" />
            <NavProduct data={productData} categoria="postres" />
            <NavProduct data={productData} categoria="tartas" />
            <NavProduct data={productData} categoria="bandejas" />
          </main>
          <footer>
            <h2>final</h2>
          </footer>
        </div>
      )}
    </div>
  );
}
