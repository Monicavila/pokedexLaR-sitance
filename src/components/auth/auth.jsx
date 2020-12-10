import React, {useState} from "react";
import "./auth.css";

function Auth(props){
    let [signIn,setSignIn]=useState(true);
 
    return(
        <div className="auth">
            {signIn || props.redirectLogIn ?(<>
                    <div className="newAuth">
                        <h3>¡BIENVENIDO ENTRENADOR!</h3>
                        <input name="email" placeholder="Correo" onChange={props.handleChange} type="email"></input>
                        <input name="pass" placeholder="Contraseña" onChange={props.handleChange} type="password"></input>
                        <button className="open" onClick={props.signInEmail}>INGRESAR</button>
                        <h6>_______________  O ingresar con  _______________</h6>
                        <div className="social">
                            <button className="facebook" onClick={props.signInFacebook}></button>
                            <button className="google" onClick={props.signInGoogle}></button>                   
                        </div>
                        <h4 onClick={() => setSignIn(false) }>¿No tienes cuenta?</h4>
                    </div>
                    <div className="pikachu"></div>
                    </> 
                    ):
                    (<>
                    <div className="newAuthIn"> 
                        <h3>¡NUEVO ENTRENADOR!</h3>           
                        <input name="name" placeholder="Nombre" onChange={props.handleChange}></input>
                        <input name="email" placeholder="Correo" onChange={props.handleChange} type="email"></input>
                        <input name="pass" placeholder="Contraseña" onChange={props.handleChange} type="password"></input>
                        <button className="open" onClick={props.signUpEmail}>REGISTRAR</button>
                        <h6>_______________  O ingresar con  _______________</h6>
                        <div className="social">
                            <button className="facebook" onClick={props.signInFacebook}></button>
                            <button className="google" onClick={props.signInGoogle}></button>                   
                        </div>
                        <h4 onClick={() => setSignIn(true)}>Ya tengo cuenta</h4>             
                        </div>
                        <div className="pikachuIn"></div>
                        </>)
            }
        </div>
    )
}
export default Auth;