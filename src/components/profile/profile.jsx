import React from "react";
import "./profile.css";
import firebase from "../firebase/config";
import imgUser from "../imagenLogin/profile.png"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
    };
  }

  signOut = () => {
    this.props.openCloseFn();
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/");
        // this.setState({uid: firebase.auth().currentUser.uid})
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <div className="profile">
        <img
          src={this.props.user.photoURL ? this.props.user.photoURL : imgUser}
          alt="imagen perfil"
<<<<<<< HEAD
          width="60px"
          height="60px"
=======
          width="20px"
          height="20px"
>>>>>>> 9a4a7f530f3de5ce20bc7ba0f3c026e53939705a
        />
        <h5>{this.props.user.displayName}</h5>
        <h6 onClick={() => this.signOut()}>Cerrar sesión</h6>
      </div>
    );
  }
}

export default Profile;