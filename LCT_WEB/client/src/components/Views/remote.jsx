import React, { Component } from "react";
import "./../../css/discovery.css";

class Remote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      inputField: "",
      isChecked: props.isChecked || false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  handleChangeInput(event) {
    this.setState({
      inputField: event.target.value
    });
  }
  loggedInHandle = e => {
    e.preventDefault();
    console.log("Sending request to server");

    fetch("/ms/getNetworkList", {
      method: "post",
      body: JSON.stringify({ ip: this.state.inputField }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log({ response });
      });
  };

  render() {
    return (
      <div>
        <div class="col-lg-12 login-form">
          <form>
            <div class="form-group">
              <label htmlFor="select1">IP</label>
              <input
                type="text"
                required
                pattern="((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$"
                className="form-control"
                id="theInput"
                value={this.state.inputField}
                onChange={this.handleChangeInput}
              />
            </div>
            <div class="form-group">
              <h6>SDN Enabled</h6>
              <label className="switch">
                <input
                  type="checkbox"
                  value={this.state.isChecked}
                  onChange={this.handleChange}
                />
                <div className="slider" />
              </label>
            </div>

            <div class="col-lg-12 loginbttm">
              <div class="col-lg-12 login-btm login-button">
                <button
                  type="submit"
                  onClick={this.loggedInHandle.bind(this)}
                  class="btn btn-outline-primary"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Remote;
