import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Switch, Route, useHistory } from "react-router-dom";
import Auth from "./components/auth/auth";
import Home from "./components/home/home";
import ProtectedComponent from "./components/protectedComponent/protectedComponent";
import NavMenu from "./components/navMenu/navMenu";
import Registro from "./components/registro/registro";
import firebase, { auth } from "./components/firebase/config";
import { Button } from "react-bootstrap";

export default function App() {
  const history = useHistory();
  const [user, setUser] = useState(false);
  let googleProvider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [name, setName] = useState("");
  let [login, setLogin] = useState(true);

  const handleChange = (event) => {
    // console.log("entrando a handle "+event.target.name)
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "pass":
        setPass(event.target.value);
        break;
    }
  };
  const signInEmail = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((response) => {
        //console.log(response)
        let user = response.user;
        console.log(user);
        setUser(user);
        history.push("/home");
      })
      .catch((error) => console.log(error));
  };
  const signUpEmail = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((response) => {
        let userObj = firebase.auth().currentUser;
        userObj
          .updateProfile({
            displayName: name,
          })
          .then((response) => {
            console.log(response);
            // let user = response.user;
            // setUser(user);
            setLogin(true);
            alert("Ya estás registrado");
            history.push("/");
          });
        // function(error) {
        //    // An error happened.
        // });
      })
      .catch((error) => console.log(error));
  };
  const signInGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        let user = result.user;
        setUser(user);
        // setIsLogged(true);
        history.push("/home");
      })
      .catch((error) => {
        // setIsLogged(false);
        console.log(error);
      });
  };
  const signInFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        // let token = result.credential.accessToken;
        let user = result.user;
        setUser(user);
        history.push("/home");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="row-navbar">
        <Switch>
          <Route path="/" exact>
            <Auth
              redirectLogIn={login}
              setUserFn={setUser}
              signInFacebook={signInFacebook}
              signInGoogle={signInGoogle}
              signUpEmail={signUpEmail}
              signInEmail={signInEmail}
              handleChange={handleChange}
            />
          </Route>
          <Route path="/registro" exact>
            <Registro />
          </Route>
          {/* <Route path="/home">
              <Home />
            </Route> */}
          <ProtectedComponent path="/home" user={user} exact>
            <NavMenu user={user} setUserFn={setUser} history={history} />
            <Home user={user} />
          </ProtectedComponent>
          {/* <Route path="/perfil" user={user} /> */}
          <ProtectedComponent path="/perfil" user={user} exact>
            <NavMenu user={user} setUserFn={setUser} history={history} />
            <Home />
          </ProtectedComponent>
          <Route path="*">
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
