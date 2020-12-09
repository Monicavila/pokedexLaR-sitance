import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/auth/auth";
import Home from "./components/home/home";
import ProtectedComponent from "./components/protectedComponent/protectedComponent";
import NavMenu from "./components/navMenu/navMenu";
import Registro from "./components/registro/registro";

export default function App() { 
  const [user, setUser] = useState(false);
  return (
    <div>
      <div className="row-navbar">
        <Router>
          <NavMenu user={user} setUserFn={setUser}/>
          <Switch>
            <Route path="/" exact>
              <Auth setUserFn={setUser} />
            </Route>
            <Route path="/registro" exact>
              <Registro />
            </Route>
            {/* <Route path="/home">
              <Home />
            </Route> */}
            <ProtectedComponent path="/home" user={user} exact>
              <Home />
            </ProtectedComponent>
            {/* <Route path="/perfil" user={user} /> */}
            <ProtectedComponent path="/perfil" user={user} exact>
              <Home /> 
            </ProtectedComponent>
            <Route path="*">
              <h2>404 Not Found</h2>
            </Route>
          </Switch>
        </Router>          
      </div>        
    </div>
  );  
}