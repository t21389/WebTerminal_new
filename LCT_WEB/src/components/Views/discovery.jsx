import React, { Component } from "react";
import Window from "./window";
import "./../../css/discovery.css";
class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.toggleDiv = this.toggleDiv.bind(this);
  }
  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <div className="App-intro">
        <div class="header">
          <h1>cdot</h1>
        </div>

        <button onClick={this.toggleDiv}>Local</button>
        {this.state.show && <Window />}
      </div>
    );
  }
}

export default Discovery;
