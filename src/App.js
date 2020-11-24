import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Jumbotron, Button } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pokeball from "./imgs/pokeball.png";
import "./App.css";

import Pokedex from "./components/pokedex/pokedex";
import Stadio from "./components/stadio/stadio"
import Female from "./components/female"
import Male from "./components/male"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        Female: true,
        Male: true,
        Home: true
    };
  }

mostrar = (val) => {
    this.setState({Home: false})
    if(val==='0') {
        this.setState({Female: true})
        this.setState({Male: false})
    }
    else if(val==='1') {
        this.setState({Female: false})
        this.setState({Male: true})
    }
}
    
home = (val) => {
    this.setState({Female: true})
    this.setState({Male: true})
    this.setState({Home: true})
}

  render() {
    return (
      <div>
        <div className="row-navbar">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#App">
              <img
                alt="pokeball"
                src={Pokeball}
                width="45"
                height="45"
                className="d-inline-block align-top"
              />{" "}
              <p>WELCOME TO YOUR POKÉMON POKEDEX</p>
              <Button className="home-Btn" variant="light" onClick={this.home}>HOME</Button>
            </Navbar.Brand>
          </Navbar>
        </div>
        <div className="start">
          <div className="female">
            <Female mostrar={this.mostrar}/>
          </div>
          <div className="male">
            <Male mostrar={this.mostrar}/>
          </div>
          {this.state.Female ? null : <Pokedex false={this.state.Male=false}/>}
          {this.state.Male ?  null : <Pokedex />}
          {this.state.Home ? <Stadio /> : null}
        <Jumbotron className="footer" bg="dark" variant="dark">
          Nov 2020 <a href="https://monicavila.netlify.app/">Godzimona</a> Co-op
          La Résistance. Visit my portfolio if you like.
        </Jumbotron>
      </div>
    </div>
    );
  }
}