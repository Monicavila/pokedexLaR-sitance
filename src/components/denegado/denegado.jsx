import React from "react";
import "./denegado.css";
import pngegg from "../imagenLogin/pngegg.png";
// import Auth from "../auth/auth";
import { useHistory } from "react-router-dom";

export default function Denied() {
  const history = useHistory();
  return (
    <div className="denied">
        <div className="otherD">
            <h3>¡ENTRENADOR NO IDENTIFCADO!</h3>
            <img src={pngegg} alt="imagen pikachu enojado" width="140px" height="130px"/>
            <button onClick={() => history.push('/')}>VOLVER A INTENTAR</button>
            <h6 onClick={() => history.push('/registro')}>¿No tienes cuenta?</h6>                        
        </div>
    </div>
  );
}