import React, { Component } from "react";

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

  toggle(index) {
    this.setState({
      current: index
    });
  }

  render() {
    return (
      <ul>
        <li>
          <a href="#nogo" onClick={this.toggle.bind(this, 1)}>
            Toggle
          </a>
          <div
            className={`collapsible ${this.state.current === 1 ? "open " : ""}`}
          >
            Text here...
          </div>
        </li>
        <li>
          <a href="#nogo" onClick={this.toggle.bind(this, 2)}>
            Toggle
          </a>
          <div
            className={`collapsible ${this.state.current === 2 ? "open " : ""}`}
          >
            Text here...
          </div>
        </li>
        <li>
          <a href="#nogo" onClick={this.toggle.bind(this, 3)}>
            Toggle
          </a>
          <div
            className={`collapsible ${this.state.current === 3 ? "open " : ""}`}
          >
            Text here...
          </div>
        </li>
      </ul>
    );
  }
}
export default Panel;