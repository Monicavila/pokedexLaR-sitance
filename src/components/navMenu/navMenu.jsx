import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pokeball from "../../imgs/pokeball.png";
import Profile from "../profile/profile";
import imgUser from "../imagenLogin/profile.png";
import onClickOutside from "react-onclickoutside";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Home: true,
      verified: false,
      name: "",
      user: {},
    };
  }

  deleteInput = () => {
    return this.setState({ name: "" });
  };

  reloadHome = () => {
    console.log(this.props);
    this.props.history.push("/home");
    return this.setState({ Home: !this.state.Home });
  };

  openClose = () => {
    console.log(this.props);
    this.props.history.push("/auth");
    return this.setState({ verified: !this.state.verified });
  };

  handleClickOutside = (evt) => {
    return this.setState({ verified: this.state.verified ? null : null });
  };

  componentDidMount() {
    this.setState({ user: this.props.user });
    console.log(this.props.user);
  }

  render() {
    return (
      <div className="row-navbar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="brand">
            <Link to="/home">
              <img
                alt="pokeball"
                src={Pokeball}
                width="45"
                height="45"
                className="d-inline-block align-top"
                onClick={() => {
                  this.reloadHome();
                  this.deleteInput();
                }}
              />{" "}
            </Link>
            <p>WELCOME TO YOUR POKÉMON POKEDEX</p>
          </Navbar.Brand>
          <Link to="/perfil">
            <div className="img-profile">
              <img
                src={
                  this.props.user.photoURL ? this.props.user.photoURL : imgUser
                }
                alt="imgUser"
                height="60px"
                onClick={() => {
                  this.openClose();
                }}
              />{" "}
            </div>
          </Link>
          {this.state.verified ? (
            <Profile
              history={this.props.history}
              user={this.props.user}
              openCloseFn={this.openClose}
              close={this.handleClickOutside}
            />
          ) : null}
        </Navbar>
      </div>
    );
  }
}

export default onClickOutside(NavMenu);
