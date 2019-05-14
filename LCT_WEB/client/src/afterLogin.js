import React, { Component } from "react";

import "./App.css";
import Footer from "./components/Footer/footer";
import NavBar from "./components/Views/navBar";
import Main from "./components/Views/main";
import Topology from "./components/Views/topology";
import Theme from "./components/Views/theme";
import socketIOClient from "socket.io-client";

class AfterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageNew: "",
      message: "",
      backgroundColor: "black",
      activeModeColor: "white"
    };
  }

  componentWillMount() {
    this.setState({
      messageNew: <Topology />
    });
  }

  componentWillReceiveProps(props) {
    console.log("rcv props", props);
  }

  fromSideBarChild(params) {
    console.log("fromSideBarChild", params);
    this.setState({
      messageNew: params
    });
  }

  activateMode = mode => {
    console.log("mode clicked ", mode);

    this.setState({
      activeModeColor: mode
    });
  };
  handleBkgColor = color => {
    console.log("selected color=>", color);

    this.setState({
      backgroundColor: color
    });
  };

  componentDidMount() {
    const socket = socketIOClient("http://127.0.0.1:1234");
    socket.on("message", data => {
      console.log(data);
      this.setState({ response: data });
    });
  }

  render() {
    console.log("Inside New Comp");
    return (
      <div>
        <NavBar
          color={this.state.backgroundColor}
          callback={this.fromSideBarChild.bind(this)}
        />
        <Theme
          activateModeHandler={this.activateMode}
          handleBgClick={this.handleBkgColor}
        />

        <Main
          mainThemeColor={this.state.activeModeColor}
          messageNew={this.state.messageNew}
        />

        <Footer />
      </div>
    );
  }
}
export default AfterLogin;
