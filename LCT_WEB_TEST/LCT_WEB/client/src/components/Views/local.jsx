import React, { Component } from "react";
import "./../../css/discovery.css";
class Local extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      isChecked: props.isChecked || false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    var interfaceJson = this.props.interfaceJson;
    console.log("interfaceJson final: ", interfaceJson[2]);

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
                <option value="select">as</option>
                <option value="First">eth1</option>
                <option value="Second">eth2</option>
                <option value="Third">eth3</option>
              </select>
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

export default Local;
