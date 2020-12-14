import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Badge } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import StadioBg from "../../imgs/stadio.png";

export default class Stadio extends React.Component {
  render() {
    return (
      <div className="start-container">
        <div className="start">
          <div className="press-start">
            <p className="start-txt">
              <span>CHOOSE</span>
              <span>A</span>
              <span>TRAINER</span>
            </p>
          </div>
          <div className="name">
            <InputGroup className="mb-3">
              <InputGroup.Append className="stadio-badge">
                <Badge className="badgeG" variant="success">
                  Name
                </Badge>{" "}
              </InputGroup.Append>
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                placeholder="Enter trainer's name"
                onChange={this.props.name}
                value={this.props.trainer}
              />
            </InputGroup>
          </div>
          <img alt="stadio" src={StadioBg}></img>
        </div>
      </div>
    );
  }
}