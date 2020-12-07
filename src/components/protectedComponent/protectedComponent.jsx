import React, { useState } from "react";
import { Route } from "react-router-dom";
import Denied from "../denegado/denegado";

export default function ProtectedComponent(props) {
  const [user, setUser] = useState(props.user);
  return (
    <Route path={props.path}>
      {user ? (
        props.children
      ) : (
        <>
          <Denied />
        </>
      )}
    </Route>
  );
}