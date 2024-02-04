import React, { useEffect, useState } from "react";
import NavBar from "../Nav/nav";
import Loading from "../Loading/loading.jsx";
import "./cardProduct.css";
import { getLogin, getProduct } from "../../action";
import Productone from "../oneProduct/oneProduct";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Alerta from "../Alerta/alerta.jsx";
import Footer from "../Footer/footer.jsx";

export default function cardProduct() {
  const [alerta, setAlerta] = useState(false);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.product) || [];
  const login = useSelector((state) => state.login) || true;
  const producdata = info.filter((e) => e.category === params.category);

  useEffect(() => {
    dispatch(getProduct()).then(() => setLoading(false));
    dispatch(getLogin());
    if (login === "ERROR_LOGIN") {
      setAlerta(true);

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }
  }, [login]);
  if (producdata && producdata[0] && producdata[0].category) {
    var titulo = producdata[0].category.toUpperCase();
    console.log("totulo", titulo);
  }

  return (
    <div>
      <div>
        <NavBar />
        <div></div>
        {alerta == true ? <Alerta tipo={"ingresar_usuario"} /> : <></>}

        {loading === true || login === true || login === "ERROR_LOGIN" ? (
          <Loading />
        ) : (
          <>
            <h5 className="text-center-product"> {titulo}</h5>
            <div className=" row_Card">
              {producdata.map((e, index) => {
                return (
                  <Productone
                    key={e.id}
                    id={e.id}
                    img={e.img}
                    name={e.name}
                    precio2={e.preciouni}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
