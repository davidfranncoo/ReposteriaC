import React from "react";
import "./footer.css";
import whatsapp from "../../Img/whatsapp.png";
import gmail from "../../Img/gmail.png";
import instagram from "../../Img/instagram.svg";
import facebook from "../../Img/facebook.svg";
import github from "../../Img/github.svg";

export default function Footer() {
  return (
    <div className="footer ">
      <h6 className="copiryting">
        © 2024 Lode Caleb. Todos los derechos reservados.
      </h6>
      <div className="footer-info">
        <div>
          <h1>CONTACTANOS</h1>
          <br />

          <div className="d-flex p-0">
            <img src={whatsapp}></img>
            <h1>+5493794000000</h1>
          </div>

          <div className="d-flex p-0">
            <img src={gmail}></img>
            <h1>lodecalep@gmail.com</h1>
          </div>
        </div>

        <div className="div-2">
          <h1>PASTERIA Y CONFITERIA</h1>
          <br />

          <h1>
            CTES-CTAL - Av. Libertad 5998
            <br />
            <br />
            Lun. a Vie. de 9:30 a 19:00 - Sáb. de 9:30 a 13:30 hs.
          </h1>
        </div>

        <div className=" redes">
          <img src={facebook}></img>
          <img src={github}></img>
          <img src={instagram}></img>
        </div>
      </div>
    </div>
  );
}
