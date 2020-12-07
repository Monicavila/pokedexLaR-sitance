import firebase, {auth} from "../firebase/config";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "./auth.css";

function Auth(){
    const history = useHistory();
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    let facebookProvider = new firebase.auth.FacebookAuthProvider();
    let [user, setUser] = useState({});

    const signInGoogle = () => {
        auth.signInWithPopup(googleProvider).then(result => {
        let user = result.user;
        setUser(user);
       // setIsLogged(true);
        history.push('/home');
        }).catch(error => {
       // setIsLogged(false);
        console.log(error);
        })
    }

    const signInFacebook = () => {
        auth.signInWithPopup(facebookProvider).then(result => {
        // let token = result.credential.accessToken;
        let user = result.user;
        setUser(user);
        history.push('/home');
        console.log(user);
        }).catch(error => {
        console.log(error);
        })
    }

    return(
        <div className="auth"> 
            <div className="newAuth">   
                <h3>¡BIENVENIDO ENTRENADOR!</h3>             
                <input placeholder="nombre"></input>
                <input placeholder="correo"></input>
                <input placeholder="contraseña"></input>
                <button className="open">INGRESAR</button>
                <h6>_______________  O ingresar con  _______________</h6>
                <div className="social">
                    <button className="facebook" onClick={signInFacebook}></button>
                    <button className="google" onClick={signInGoogle}></button>                     
                </div>
                <h6>¿No tienes cuenta?</h6>              
            </div> 
            <div className="pikachu"></div>
        </div>
    )
}
export default Auth;