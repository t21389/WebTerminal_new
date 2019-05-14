import React, { Component } from "react";
import "./../../css/discovery.css";
import Local from "./local";
import Remote from "./remote";

class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      show: false,
      shows: false,
      showM: false,
      username: "",
      interfaceJson: ""
    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.toggleDivRemote = this.toggleDivRemote.bind(this);
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  clickHandler(event) {
    console.log("cliked here", event, "and", this.props);

    switch (event) {
      case 1:
        {
          console.log("event 1: callinterface", this.props);
          this.props.callback(Component).then(resp => {
            console.log("response final ", JSON.parse(resp));
            console.log("**********" + resp);
            let response = JSON.parse(resp);
            //response.push({ dummy: "value" });
            this.setState({
              interfaceJson: response
            });
            this.toggleDiv();
          });
          console.log(
            "this.state.interfaceJson[0] :" + this.state.interfaceJson
          );
        }
        break;
      case 2:
        {
          this.toggleDivRemote();
          console.log(
            "this.state.interfaceJson[0] :" + this.state.interfaceJson
          );
        }
        break;
      default: {
      }
    }
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  toggleDivRemote = () => {
    const { shows } = this.state;
    this.setState({ shows: !shows });
  };

  showModal = () => {
    this.setState({
      ...this.state,
      showM: !this.state.showM
    });
  };

  render() {
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
                <h1>Optical Transport Controller</h1>

                <div class="row">
                  <div class="col-md-6">
                    <button onClick={this.clickHandler.bind(this, 1)}>
                      Local
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button onClick={this.clickHandler.bind(this, 2)}>
                      Remote
                    </button>
                  </div>
                </div>

                <div class="col-lg-12 login-form">
                  {this.state.show && (
                    <Local interfaceJson={this.state.interfaceJson} />
                  )}
                </div>
                <div class="col-lg-12 login-form">
                  {this.state.shows && (
                    <Remote interfaceJson={this.state.interfaceJson} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discovery;
