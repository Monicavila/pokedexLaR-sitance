import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import swal from "sweetalert";
import {withRouter} from "react-router-dom";

import PokedexF from "../pokedex/pokedexF.jsx";
import PokedexM from "../pokedex/pokedexM.jsx";
import Stadio from "../stadio/stadio";
import Female from "../female";
import Male from "../male";

class Home extends React.Component {
  constructor(props) {
    super(props);
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
    } else if (this.state.name.length > 8) {
      swal("To Continue!", "Enter a name smaller than 8 letters!", "warning");
    } else {
      this.setState({ Home: false });
      if (val === "0") {
        //Redireccionar hacia /pokedex/female
        this.props.history.push("/pokedex/female");
        this.setState({ Female: true });
        this.setState({ Male: false });
      } else if (val === "1") {
        //Redireccionar hacia /pokedex/male
        this.props.history.push("/pokedex/male");
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
    const {gender} = this.props.match.params;
    return (
      <div>
        <div className="start">
          <div className="female">
            {!gender ? (
              <Female verify={this.save} />
            ) : null}
          </div>
          <div className="male">
            {!gender ? (
              <Male verify={this.save} />
            ) : null}
          </div>
          {gender === "female" ? (
            <PokedexF trainer={this.state.name} />
          ) : null}
          {gender === "male" ? (
            <PokedexM trainer={this.state.name} />
          ) : null}
          {!gender ? (
            <Stadio name={this.handleInput} trainer={this.state.name} />
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

export default withRouter(Home);