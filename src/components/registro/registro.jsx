import React, {useState} from "react";
import "./registro.css";

function Registro(){

    return(
        <div className="reg"> 
            <div className="newReg">   
                <h3>¡NUEVO ENTRENADOR!</h3>             
                <input placeholder="nombre"></input>
                <input placeholder="correo"></input>
                <input placeholder="contraseña"></input>
                <button className="userReg">REGISTRARSE</button>
                <h6>_______________  O registrarse con  _______________</h6>
                <div className="social">
                    <button className="facebook" onClick=""></button>
                    <button className="google" onClick=""></button>                     
                </div>
                <h6 onClick="">INGRESAR</h6>              
            </div> 
            <div className="pikachu"></div>
        </div>
    )
}
export default Registro;