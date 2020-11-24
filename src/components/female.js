import React from "react";
import femaleImg from "../imgs/female.png";

export default class Female extends React.Component {
    render() {
      return (<div className="female">
      <img alt="female" src={femaleImg} onClick={() => this.props.mostrar('0')}></img>
    </div>)
    }
}