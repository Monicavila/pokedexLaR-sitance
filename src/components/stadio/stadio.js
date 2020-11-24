import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import StadioBg from "../../imgs/stadio.png";

import Male from "../../imgs/male.png";

export default class Stadio extends React.Component {
  render() {
    return (
      <div className="start">
        <div className="press-start">
          <p className="start-txt">
            <p>PICK A TRAINER</p>
          </p>
        </div>
        <div className="name">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter the trainer name"
            />
          </InputGroup>
        </div>
        <img alt="stadio" src={StadioBg}></img>
      </div>
    );
  }
}
