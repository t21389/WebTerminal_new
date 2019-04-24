import React, { Component } from "react";
import "./../../css/discovery.css";
import Window from "./window";
class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      shown: true,
      show: false
    };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden = {
      display: this.state.shown ? "none" : "block"
    };
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2" />
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true" />
              </div>
              <div class="col-lg-12 login-title">
                Optical Transport 123 Controller
              </div>

              <div class="row">
                <div class="col-sm-3 col-md-6 col-lg-4">
                  <button onClick={this.toggleDiv}>Local</button>
                </div>
              </div>

              <div class="col-lg-12 login-form">
                {this.state.show && <Window />}
              </div>
              <div class="col-lg-3 col-md-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discovery;
