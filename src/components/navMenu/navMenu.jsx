import React from "react";
import { Link } from "react-router-dom";
import "./navMenu.css";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pokeball from "../imagenLogin/pokeball.png";
import Profile from "../profile/profile";
import {withRouter} from "react-router-dom";

class NavMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Female: true,
        Male: true,
        Home: true,
        verified: false,
        name: "",
      };
      
    }

    
    home = () => {
        this.setState({ Female: true });
        this.setState({ Male: true });
        this.setState({ Home: true });
    };

    deleteInput = () => {
        this.setState({ name: "" });
    };

    openClose = () => {
        this.props.history.push('/registro')
        return this.setState({verified: !this.state.verified})
    }

    render() {
        
        return(            
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand href="#App" className="navMenu">
                    <img
                        alt="pokeball"
                        src={Pokeball}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    />{" "}
                    <p>WELCOME TO YOUR POKÉMON POKEDEX</p>
                    <ul>
                        <li>
                            <Link to="/">
                                <Button className="home-Btn" variant="light" >
                                    LOGIN
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/registro">
                                <Button className="home-Btn" variant="light" >
                                    REGISTRAR
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home">
                                <Button className="home-Btn" variant="light" onClick={(event) => {this.deleteInput(event);this.home(event)}}>
                                    HOME
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/perfil">
                                <Button className="home-Btn" variant="light" onClick={() => {this.openClose()}}>
                                    PERFIL
                                </Button>        
                                {this.state.verified ? <Profile /> : null}                      
                            </Link>
                        </li>
                    </ul>                    
                </Navbar.Brand>
            </Navbar>
        );
    }    
}

export default withRouter(NavMenu);