/* eslint-disable default-case */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import GetOrders from "./getorders";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "./modal";
import Main from "./main";
import Discovery from "./discovery";
import "./../../css/navbar.css";
import Topology from "./topology";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderIddata: "",
      message: "",
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  clickHand(event) {
    //console.log('Clicked Here', event);
    this.props.callback(event);
  }
  // clickHandler(event, Component) {
  //   console.log("clicked Here", event, "and", this.props);

  // //   switch (event) {
  // //     case 1:
  // //       {
  // //         console.log("event 1 :CallForOrderId", this.props);
  // //         this.props.callbackI(Component).then(resp => {
  // //           console.log("response final", resp);
  // //           this.setState({
  // //             orderIddata: resp
  // //           });
  // //           this.props.DisplayOrderIdData(<GetOrders orderIddata={resp} />);
  // //         });
  // //       }
  // //       break;
  // //   }
  // }
  CallForInterface = async params => {
    const response = await this.callApi(1);
    console.log("response1<<<<<<<<<<" + response);
    return response;
  };

  DisplayInterfaceData = params => {
    console.log("CallForInterface", params.props);
    this.setState({
      message: params
    });
  };

  CallForOrderId = async params => {
    const response = await this.callApi(2);
    console.log("response 2 " + response);
    return response;
  };

  DisplayOrderIdData = params => {
    console.log("CallForOrderId", params.props);
    this.setState({
      message: params
    });
  };

  callApi = async event => {
    console.log("call api" + event);
    switch (event) {
      case 1:
        {
          const response = await fetch("/api/getInterfaceData");
          console.log("@@@@@@" + response);
          const body = await response.text();
          console.log("body ==>", body);
          return body;
        }
        break;
      case 2:
        {
          const response = await fetch("/api/getOrderIdData");
          console.log("OrderId REsponse" + JSON.stringify(response));
          const body2 = await response.text();
          console.log("body2 ==>", body2);
          return body2;
        }
        break;
      // case 3:
      // {
      //   console.log("event 1 :CallForOrderId", this.props);
      //           this.props.callbackI(Component).then(resp => {
      //             console.log("response final", resp);
      //             this.setState({
      //               orderIddata: resp
      //             });
      //             this.props.DisplayOrderIdData(<GetOrders orderIddata={resp} />);
      //           });
      // }
      // break;
    }
  };

  fromSideBarChild(params) {
    console.log("fromSideBarChild", params);
    this.setState({
      messageNew: params
    });
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          {/* <a class="navbar-brand" href="#">
              <img
                src={require("./../../assets/logo.svg")}
                width="30"
                height="30"
                alt=""
              />
            </a> */}

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" className="link">
                <button
                  type="submit"
                  class="btn btn-danger navbar-btn"
                  className="btn-hover color-1"
                  onClick={this.clickHand.bind(this, <Topology />)}
                >
                  <i class="fa fa-home" />
                  <span class="ml-2">TOPOLOGY</span>
                </button>
              </li>

              <li class="nav-item" className="link">
                <button
                  type="submit"
                  onClick={this.clickHand.bind(
                    this,
                    <Discovery callback={this.CallForInterface.bind(this)} />
                  )}
                  class="btn btn-danger navbar-btn"
                  className="btn-hover color-1"
                >
                  <i class="fa fa-random" />
                  <span class="ml-2">DISCOVERY</span>
                </button>
              </li>

              <li class="nav-item" className="link">
                <button
                  type="submit"
                  class="btn btn-danger navbar-btn"
                  className="btn-hover color-1"
                >
                  <i class="fa fa-home" />
                  <span class="ml-2">CONNECTIVITY</span>
                </button>
              </li>
              <li class="nav-item" className="link">
                <button
                  type="submit"
                  class="btn btn-danger navbar-btn"
                  className="btn-hover color-1"
                >
                  <i class="fa fa-home" />
                  <span class="ml-2">NOTIFICATION</span>
                </button>
              </li>
              <li class="nav-item" className="link">
                <button
                  type="submit"
                  class="btn btn-danger navbar-btn"
                  className="btn-hover color-1"
                >
                  <i class="fa fa-home" />
                  <span class="ml-2">PERFORMANCE</span>
                </button>
              </li>
              <li class="nav-item" className="link">
                <button
                  type="submit"
                  class="btn btn-danger navbar-btn"
                  className="btn-hover color-1"
                >
                  <i class="fa fa-home" />
                  <span class="ml-2">PCE</span>
                </button>
              </li>
              <li class="nav-item" className="link">
                <button
                  type="submit"
                  class="btn btn-danger navbar-btn"
                  className="btn-hover color-1"
                >
                  <i class="fa fa-home" />
                  <span class="ml-2">CHASSIS VIEW</span>
                </button>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item" className="link">
                <a class="nav-link" href="#" onClick={this.showDropdownMenu}>
                  <i class="fa fa-user-circle" aria-hidden="true" />
                </a>
                {this.state.displayMenu ? (
                  <ul className="ulclass">
                    <li className="liclass">
                      <a className="active" href="#Create Page">
                        <i class="fa fa-user" />
                        <span class="ml-2">My Profile</span>
                      </a>
                    </li>
                    <li className="liclass">
                      <a
                        href="#Manage Pages"
                        onClick={this.clickHand.bind(
                          this,
                          <GetOrders
                            callback={this.CallForOrderId.bind(this)}
                          />
                        )}
                      >
                        {" "}
                        <i class="fa fa-first-order" />
                        <span class="ml-2">Get Order</span>
                      </a>
                    </li>
                    <li className="liclass">
                      <a href="#Create Ads">
                        <i class="fa fa-sign-out" />
                        <span class="ml-2">Sign Out</span>
                      </a>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
