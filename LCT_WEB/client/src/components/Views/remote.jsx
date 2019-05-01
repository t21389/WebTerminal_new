import React, { Component } from "react";
import "./../../css/discovery.css";
class Remote extends React.Component {
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
    var jsonString = this.props.interfaceJson;
    return (
      <div>
        <div class="col-lg-12 login-form">
          <form>
            <div class="form-group">
              <label htmlFor="select1">IP</label>
              <select
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                className="form-control"
              >
                {jsonString.value.map(jsonObject => {
                console.log("test" + jsonObject);
                return (
                  <option>
                    {jsonObject.Interface_netmask}
                  </option>
                );
              })}
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

export default Remote;
