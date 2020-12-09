import firebase, {auth} from "../firebase/config";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "./auth.css";

function Auth(){
    const history = useHistory();
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    let facebookProvider = new firebase.auth.FacebookAuthProvider();
    let [user, setUser] = useState({}); 
    let [signIn,setSignIn]=useState(true);
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [pass,setPass]=useState("");
    // eslint-disable-next-line

    const signInEmail =(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,pass)
        .then((response) =>{ 
                            //console.log(response)
                            history.push('/home');
                            })
        .catch((error) => console.log(error));
        
    }
    const signUpEmail=(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,pass)
        .then((response) => history.push('/home'))
        .catch((error) => console.log(error));
    }
    const handleChange=(event)=>{
        // console.log("entrando a handle "+event.target.name)
        switch(event.target.name){
            case "name":
                setName(event.target.value);
            break;
            case"email":
                setEmail(event.target.value);
            break;
            case "pass":
                setPass(event.target.value);
            break;
        }
    }

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
            {signIn?(
                <>
                    <div className="newAuth">
                        <h3>¡BIENVENIDO ENTRENADOR!</h3>
                        <input name="email" placeholder="correo" onChange={handleChange} type="email"></input>
                        <input name="pass" placeholder="contraseña" onChange={handleChange} type="password"></input>
                        <button className="open" onClick={signInEmail}>INGRESAR</button>
                        <h6>_______________  O ingresar con  _______________</h6>
                        <div className="social">
                            <button className="facebook" onClick={signInFacebook}></button>
                            <button className="google" onClick={signInGoogle}></button>                     
                        </div>
                        <h6 onClick={() => setSignIn(false) }>¿No tienes cuenta?</h6>
                    </div>
                    <div className="pikachu"></div>
                    </>  
                    ):
                    (<>
                    <div className="newAuth">   
                        <h3>¡BIENVENIDO ENTRENADOR!</h3>             
                        <input name="name" placeholder="nombre" onChange={handleChange}></input>
                        <input name="email" placeholder="correo" onChange={handleChange} type="email"></input>
                        <input name="pass" placeholder="contraseña" onChange={handleChange} type="password"></input>
                        <button className="open" onClick={signUpEmail}>REGISTRAR</button>
                        <h6>_______________  O ingresar con  _______________</h6>
                        <div className="social">
                            <button className="facebook" onClick={signInFacebook}></button>
                            <button className="google" onClick={signInGoogle}></button>                     
                        </div>
                        <h6 onClick={() => setSignIn(true)}>Ya tengo cuenta</h6>              
                        </div> 
                        <div className="pikachu"></div>
                    </>
                )
            }
        </div>
    )
}
export default Auth;