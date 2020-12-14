import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Switch, Route, useHistory } from "react-router-dom";
import Auth from "./components/auth/auth";
import Home from "./components/home/home";
import ProtectedComponent from "./components/protectedComponent/protectedComponent";
import NavMenu from "./components/navMenu/navMenu";
import firebase, { auth } from "./components/firebase/config";
import swal from "sweetalert";

export default function App() {
  const history = useHistory();
  const [user, setUser] = useState(false);
  let googleProvider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [name, setName] = useState("");
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);

  const changeState = (value) => {
    setRegister(value);
  };

  const handleChange = (event) => {
    // console.log("entrando a handle "+event.target.name)
    // eslint-disable-next-line
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
      .catch((error) => {
        console.log(error);
        swal(
          "Sorry!",
          "The email address or password are incorrect!",
          "warning"
        );
      });
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
            swal("Congratulations!", "You are registered!", "success");
            history.push("/");
          });
        // function(error) {
        //    // An error happened.
        // });
      })
      .catch((error) => {
        console.log(error);
        swal(
          "Sorry!",
          "The email address is already in use by another account!",
          "warning"
        );
      });
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
              register={register}
              setUserFn={setUser}
              signInFacebook={signInFacebook}
              signInGoogle={signInGoogle}
              signUpEmail={signUpEmail}
              signInEmail={signInEmail}
              handleChange={handleChange}
              changeRegister={changeState}
            />
          </Route>
          <ProtectedComponent
            exact
            path="/home"
            user={user}
            login={changeState}
          >
            <NavMenu user={user} setUserFn={setUser} history={history} />
            <Home exact user={user} />
          </ProtectedComponent>
          <ProtectedComponent
            exact
            path="/perfil"
            user={user}
            login={changeState}
          >
            <>
              <NavMenu user={user} setUserFn={setUser} history={history} />
              <Home/>
            </>
          </ProtectedComponent>
          <ProtectedComponent
            exact
            path="/pokedex/:gender"
            user={{ name: "" }}
            login={changeState}
          >
            <>
              <NavMenu user={user} setUserFn={setUser} history={history} />
              <Home user={user} />
            </>
          </ProtectedComponent>
          <Route exact path="*">
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}