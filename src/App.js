import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
<<<<<<< HEAD
import { Switch, Route, useHistory } from "react-router-dom";
=======
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
import Auth from "./components/auth/auth";
import Home from "./components/home/home";
import ProtectedComponent from "./components/protectedComponent/protectedComponent";
import NavMenu from "./components/navMenu/navMenu";
import firebase, { auth } from "./components/firebase/config";
import swal from "sweetalert";
<<<<<<< HEAD

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
=======

export default function App() {
  const history = useHistory();
  const [user, setUser] = useState(false);
  let googleProvider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [name, setName] = useState("");
  let [login, setLogin] = useState(false);
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a

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
<<<<<<< HEAD
        console.log(error);
        swal(
          "Sorry!",
          "The email address or password are incorrect!",
          "warning"
        );
=======
        console.log(error)
        swal("Sorry!", "The email address or password are incorrect!", "warning");
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
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
<<<<<<< HEAD
            swal("Congratulations!", "You are registered!", "success");
=======
            swal("Congratulations!", "You are registered!", "warning");
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
            history.push("/");
          });
        // function(error) {
        //    // An error happened.
        // });
      })
      .catch((error) => {
<<<<<<< HEAD
        console.log(error);
        swal(
          "Sorry!",
          "The email address is already in use by another account!",
          "warning"
        );
=======
        console.log(error)
        swal("Sorry!", "The email address is already in use by another account!", "warning");
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
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
<<<<<<< HEAD
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
=======
        <BrowserRouter>
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
            {/* <Route path="/home">
                <Home />
              </Route> */}
            <ProtectedComponent path="/home" exact>
              <NavMenu user={user} setUserFn={setUser} history={history} />
              <Home user={user} />
            </ProtectedComponent>
            {/* <Route path="/perfil" user={user} /> */}
            <ProtectedComponent path="/perfil" user={user} exact>
              <NavMenu user={user} setUserFn={setUser} history={history} />
              <Home />
            </ProtectedComponent>
            <ProtectedComponent path="/pokedex/:gender" user={{name: ""}} exact>
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
            <>
              <NavMenu user={user} setUserFn={setUser} history={history} />
              <Home user={user} />
            </>
          </ProtectedComponent>
<<<<<<< HEAD
          <Route exact path="*">
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
=======
            <Route path="*">
              <h2>404 Not Found</h2>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
