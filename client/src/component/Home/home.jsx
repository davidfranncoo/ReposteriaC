//para trar reac ponemos rafce
import React, { useEffect, useState } from "react";
import Nav from "../Nav/nav";
import NavProduct from "../NavProduct/navproduct";
import GetData from "../../action/dataproduct";



export default function Home() {


  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetData();
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos", error);
        setLoading(false);
      }
    };

    fetchData();
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
