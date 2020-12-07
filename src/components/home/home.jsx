import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import swal from "sweetalert";
import "./home.css";

import PokedexF from "../pokedex/pokedexF.jsx";
import PokedexM from "../pokedex/pokedexM.jsx";
import Stadio from "../stadio/stadio";
import Female from "../female";
import Male from "../male";

export default class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        Female: true,
        Male: true,
        Home: true,
        name: "",
      };
    }
  
    save = (val) => {
      if (this.state.name === "") {
        swal("To Continue!", "Give a Name!", "warning");
      } else if (this.state.name.length > 8){
        swal("To Continue!", "Enter a name smaller than 8 letters!", "warning");
      }else {
        this.setState({ Home: false });
        if (val === "0") {
          this.setState({ Female: true });
          this.setState({ Male: false });
        } else if (val === "1") {
          this.setState({ Female: false });
          this.setState({ Male: true });
        }
      }
    };
  
    handleInput = (event) => {
      const trainer = event.target.value;
      this.setState({ name: trainer });
    };
  
    render() {
      return (
        <div>
          <div className="start">
            <div className="female">
              {this.state.Female && this.state.Male ? (
                <Female verify={this.save} />
              ) : null}
            </div>
            <div className="male">
              {this.state.Male && this.state.Female ? (
                <Male verify={this.save} />
              ) : null}
            </div>
            {(this.state.Female && !this.state.Male) ? (
              <PokedexF trainer={this.state.name} />
            ) : null}
            {(this.state.Male && !this.state.Female) ? (
              <PokedexM trainer={this.state.name} />
            ) : null}
            {this.state.Home ? (
              <Stadio
                name={this.handleInput}
                trainer={this.state.name}
              />
            ) : null}
            <Jumbotron className="footer" bg="dark" variant="dark">
              Nov 2020 <a href="https://monicavila.netlify.app/">Godzimona</a>{" "}
              Co-op La Résistance. Visit my portfolio if you like.
            </Jumbotron>
          </div>
        </div>
      );
    }
  }