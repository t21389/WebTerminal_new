import React, { Component } from "react";
import "./../../css/main.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageNew: "Main Component"
    };
  }

  render() {
    const themeBgColor = {
      background:  this.props.mainThemeColor
  };
  console.log("themeBgColor ", themeBgColor);
    console.log("*******" + this.props.messageNew);
    return (
      <div class="main-panel" style={themeBgColor}>
        <div class="content">{this.props.messageNew}</div>
      </div>
    );
  }
}

export default Main;
