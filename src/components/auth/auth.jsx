import firebase, {auth} from "../firebase/config";
import React, {useState} from "react";

function Auth(){
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    let facebookProvider = new firebase.auth.FacebookAuthProvider();
    let [user, setUser] = useState({});

    const signInGoogle = () => {
        auth.signInWithPopup(googleProvider).then(result => {
        let user = result.user;
        setUser(user);
       // setIsLogged(true);
      //  history.push('/panel');
        }).catch(error => {
       // setIsLogged(false);
        console.log(error);
        })
    }

    const signInFacebook = () => {
        auth.signInWithPopup(facebookProvider).then(result => {
        let token = result.credential.accessToken;
        let user = result.user;
        setUser(user);
        console.log(user);
        }).catch(error => {
        console.log(error);
        })
    }

    return(
        <>
            <input placeholder="nombre"></input>
            <input placeholder="correo"></input>
            <input placeholder="contraseña"></input>
            <button onClick={signInGoogle}>Google</button>
            <button onClick={signInFacebook}>facebook</button>
        </>
    )
}



export default Auth;