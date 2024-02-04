import React, { useEffect } from "react";
import { getUser } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import perfilPng from "../../Img/perfil.png";

import "./buttonLogin.css";

export default function buttonLogin() {
  const dispatch = useDispatch();

  const infoUser = useSelector((state) => state.user) || [];
  const token = window.localStorage.getItem("TOKEN");
  useEffect(() => {}, [infoUser]);

  if (token) {
    useEffect(() => {
      dispatch(getUser());
    }, []);
  } else {
    console.log(" NO hay uausriao");
  }

  function handlerSesion() {
    window.localStorage.clear("TOKEN");
    window.location.reload();
  }
  function handlerOpenSesion() {
    window.location.href = "/login";
  }
  if (infoUser.username) {
    var username = infoUser.username.toUpperCase();
  }

  return (
    <div>
      {token ? (
        <div className="buttonlogin">
          <div className="w-100 d-flex flex-column align-items-center">
            <img src={perfilPng} className="img_perfil"></img>

            <h6>{`Hola ${username}`}</h6>

            <Button className="buton-sesion" onClick={handlerSesion}>
              <h6 className="h6_login">Cerrar Sesión</h6>
            </Button>
          </div>
        </div>
      ) : (
        <div className="buttonlogin">
          <div className="w-100 d-flex flex-column align-items-center">
            <img src={perfilPng} className="img_perfil"></img>

            <Button className="buton-sesion" onClick={handlerOpenSesion}>
              <h6 className="h6_login">Iniciar Sesión</h6>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
