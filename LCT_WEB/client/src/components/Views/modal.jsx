import React, { Component } from "react";
import "./../../css/modal.css";

class Modal extends React.Component {
  render() {
    if (!this.props.showM) {
      return null;
    }
    return <div>{this.props.children}</div>;
  }
}

export default Modal;
