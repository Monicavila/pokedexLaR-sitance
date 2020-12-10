import React from "react";
import maleImg from "../imgs/male.png";

export default class Female extends React.Component {
  render() {
    return (
      <div className="male">
        <img
          alt="male"
          src={maleImg}
          onClick={() => this.props.verify("1")}
        ></img>
      </div>
    );
  }
}
