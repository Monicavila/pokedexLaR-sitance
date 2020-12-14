import React from "react";
import { Route } from "react-router-dom";
import Denied from "../denegado/denegado";

export default function ProtectedComponent(props) {
  return (
    <Route path={props.path}>
      {props.user ? (
        props.children
      ) : (
        <>
<<<<<<< HEAD
          <Denied login={props.login}/>
=======
          <Denied />
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
        </>
      )}
    </Route>
  );
}