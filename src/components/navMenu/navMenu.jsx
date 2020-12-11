import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pokeball from "../../imgs/pokeball.png";
import Profile from "../profile/profile";
import imgUser from "../imagenLogin/profile.png"

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
        this.setState({ name: "" });
    };

    reloadHome = () => {
        console.log(this.props);
        this.props.history.push('/home');
        return this.setState({Home: !this.state.Home})
    }

    openClose = () => {
        console.log(this.props);
        this.props.history.push('/auth');
        return this.setState({verified: !this.state.verified})
    }

    componentDidMount() {
        this.setState({ user: this.props.user });
        console.log(this.props.user);
      }

    render() {
        
        return(         
    
            <div className="row-navbar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#App">
                <Link to="/home">
                    <img
                        alt="pokeball"
                        src={Pokeball}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                        onClick={() => {this.reloadHome()}}
                    />{" "}
                </Link>
                <p>WELCOME TO YOUR POKÉMON POKEDEX</p>
                <ul>
                        <li>
                            <Link to="/perfil">
                            <img className="user-Img" src={this.props.user.photoURL? this.props.user.photoURL : imgUser} alt="imgUser" onClick={() => {this.openClose()}}></img>                        
                            </Link>
                        </li>
                        <li>
                            {this.state.verified ? <Profile history={this.props.history} user={this.props.user} openCloseFn={this.openClose} /> : null}  
                        </li>
                    </ul>  
                </Navbar.Brand>
            </Navbar>
            </div>
            );
        }    
    }
    
    export default NavMenu;