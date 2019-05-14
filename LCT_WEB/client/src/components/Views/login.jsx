import React, { Component } from "react";
import "./../../css/login.css";
import { BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputField: "",
      Input: "",
      loggedIn: false,
      clickOn: false
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  handleChangeInput(event) {
    this.setState({
      inputField: event.target.value
    });
  }
  handleChangePassword(event) {
    this.setState({
      input: event.target.value
    });
  }

  logInHandle = () => {
    this.setState({ clickOn: true });
  };
  render() {
    return (    
        <div>
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-2" />
              <div class="col-lg-6 col-md-8" className="newrow">
                <div class="col-lg-12" className="keylo">
                  <i class="fa fa-key" aria-hidden="true" />
                </div>
                <div class="col-lg-12 login-title" className="title">
                  <h1>Login</h1>

                  <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                      <form>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon" className="addon">
                              <span class="fa fa-user" />
                            </span>
                            <input
                              placeholder="User Name"
                              type="text"
                              className="form-control"
                              id="theInput"
                              value={this.state.inputField}
                              onChange={this.handleChangeInput}
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon" className="addon">
                              <span class="fa fa-lock" />
                            </span>
                            <input
                              placeholder="Password"
                              type="password"
                              className="form-control"
                              id="theInput"
                              value={this.state.input}
                              onChange={this.handleChangePassword}
                            />
                          </div>
                        </div>

                        <div class="form-group text-center">
                          <Link to="/login">
                            <button
                              type="submit"
                              class="btn btn-success btn-lg"
                            >
                              Login
                            </button>{" "}
                          </Link>
                         
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;
