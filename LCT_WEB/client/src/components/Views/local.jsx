import React, { Component } from "react";
import "./../../css/discovery.css";
import ReactDOM from "react-dom";
class Local extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      interfaceJson: "",
      isChecked: props.isChecked || false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  CallForInterface = () => {
    console.log("CallForInterface", this.interfaceJson);
  };

  handleChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    var jsonString = this.props.interfaceJson;
    console.log("interfaceJson final***********: ", jsonString);
    console.log("length====>", jsonString.length);

    return (
      <div>
        <form>
          <div class="form-group">
            <label htmlFor="select1">Interface</label>
            <select
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              className="form-control"
            >
              {jsonString.value.map(jsonObject => {
                console.log("test" + jsonObject);
                return (
                  <option>
                    {jsonObject.Interface_address},
                    {jsonObject.Interface_netmask}
                  </option>
                );
              })}
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
            <div class="col-lg-6 login-btm login-button">
              <button type="submit" class="btn btn-outline-primary">
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Local;
