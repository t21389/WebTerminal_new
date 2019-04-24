import React, { Component } from "react";
import "./../../css/discovery.css";
class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select"
    };
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div class="col-lg-12 login-form">
          <form>
            <div class="form-group">
              <label htmlFor="select1">Interface Name </label>
              <select
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                className="form-control"
              >
                <option value="select">eth0</option>
                <option value="First">eth1</option>
                <option value="Second">eth2</option>
                <option value="Third">eth3</option>
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="select1">IP</label>
              <select
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                className="form-control"
              >
                <option value="select">10.5.0.10</option>
                <option value="First">10.5.0.11</option>
                <option value="Second">10.5.0.12</option>
                <option value="Third">10.5.0.13</option>
              </select>
            </div>

            <div class="col-lg-12 loginbttm">
              <div class="col-lg-6 login-btm login-text" />
              <div class="col-lg-6 login-btm login-button">
                <button type="submit" class="btn btn-outline-primary">
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Window;
