import React, { Component } from "react";
import "./../../css/modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messgae: "MAIN Component"
    };
  }
  render() {
    if (!this.props.showM) {
      return null;
    }
    return <div>{this.props.message}</div>;
  }
}

export default Modal;
