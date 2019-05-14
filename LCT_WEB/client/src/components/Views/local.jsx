import React, { Component } from "react";
import "./../../css/discovery.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Local extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      interfaceJson: "",
      isChecked: props.isChecked || false,
      response: false,
      endpoint: "http://127.0.0.1:1234"
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

  state = {
    loggedIn: false
  };
  loggedInHandle = () => {
    // this.setState({loggedIn :true})

   
  };
  render() {
    var jsonString = this.props.interfaceJson;
    console.log("interfaceJson final***********: ", jsonString);
    console.log("length====>", jsonString.length);
    const { response } = this.state;
    console.log("response from the socket server is :" + response);
    return (
      <Router>
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
                      {jsonObject.Interface_name},{" "}
                      {jsonObject.Interface_address}
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
              <div class="col-lg-12 login-btm login-button">
                <Link to="/about/">
                  <button
                    type="submit"
                    class="btn btn-outline-primary"
                    onClick={this.loggedInHandle.bind(this)}
                  >
                    SUBMIT
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Router>
    );
  }
}

export default Local;
