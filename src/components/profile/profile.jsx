import React from "react";
import pngegg from "../imagenLogin/pngegg.png";
// import { useHistory } from "react-router-dom";
import "./profile.css";
import firebase, {auth} from "../firebase/config";
import {withRouter} from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        uid: ''
    }
  }

  signOut = () => {
    console.log("chao")
    this.props.history.push('/registro')
    firebase.auth().signOut().then(() => {      
      // this.setState({uid: firebase.auth().currentUser.uid})
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <div className="profile">
        <img src={pngegg} alt="imagen perfil" width="20px" height="20px"/>
        <h5>Vane</h5>
        <h6 onClick={() => this.signOut()}>Cerrar sesión</h6>
      </div>
    );
  }
}

export default withRouter(Profile);
  
