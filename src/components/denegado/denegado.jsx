import React from "react";
import "./denegado.css";
import pngegg from "../imagenLogin/pngegg.png";
import { useHistory } from "react-router-dom";

export default function Denied(props) {
  const history = useHistory();

  const redirect = (value) => {
    props.login(value);
    history.push({
      pathname: '/',
      state: { setLogin: "usuario" },
    });
  };

  return (
    <div className="denied">
      <div className="otherD">
        <h3>¡ENTRENADOR NO IDENTIFCADO!</h3>
        <img
          src={pngegg}
          alt="imagen pikachu enojado"
          width="140px"
          height="130px"
        />
        <button onClick={() => history.push('/')}>VOLVER A INTENTAR</button>
        <h6 onClick={() => redirect(true)}>¿No tienes cuenta?</h6>
      </div>
    </div>
  );
}
