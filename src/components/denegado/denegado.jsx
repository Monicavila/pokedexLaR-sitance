import React from "react";
import "./denegado.css";
import pngegg from "../imagenLogin/pngegg.png";
import Auth from "../auth/auth";

export default function Denied() {
  return (
    <div className="denied">
        <div className="otherD">
            <h3>¡ENTRENADOR NO IDENTIFCADO!</h3>
            <img src={pngegg} alt="imagen pikachu enojado" width="140px" height="130px"/>
            <button onClick={<Auth />}>VOLVER A INTENTAR</button>
            <h6>¿No tienes cuenta?</h6>                        
        </div>
    </div>
  );
}