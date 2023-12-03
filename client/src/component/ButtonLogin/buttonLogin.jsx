import React, { useEffect } from "react";
import { getUser } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import perfilPng from "../../Img/perfil.png";

import "./buttonLogin.css"








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
  return (
   <div>
       {token ? (
                <div className="buttonlogin">
                   <div className="w-100 d-flex flex-column align-items-center" >
                    

                
          <img src={perfilPng} className="img_perfil"></img>

                  <h6>{`Hola ${infoUser.username}`}</h6>
                  <h6>{` ${infoUser.email}`}</h6>

                    
                
                  <button onClick={handlerSesion}>
                    <h6 className="h6_login" >cerrar sesion</h6>
                  </button>
                   </div>
                </div>
              ) : (
                <div className="buttonlogin">
                  <div className="w-100 d-flex flex-column align-items-center" >

          <img src={perfilPng} className="img_perfil">

          </img>

                  <Link to="/login">

                  <h6 className="h6_login" >iniciar sesion</h6>
                  </Link>
                  </div>
               
                </div>
              )}
   </div>
  );
}

