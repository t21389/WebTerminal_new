import React, { Component } from "react";
import Dummy from "./displaygetorder";
import "./../../css/getorder.css";

class GetOrders extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      show: false,
      shows: false,
      showM: false,
      username: "",
      interfaceJson1: ""
    };
    this.toggleDiv = this.toggleDiv.bind(this);

  }
 
  clickHandler(event) {
    console.log("cliked here", event, "and", this.props);

    switch (event) {
      case 1:
        {
          console.log("event 2: callinterface", this.props);
          this.props.callback(Component).then(resp => {
            console.log("response final ", JSON.parse(resp));
            console.log("**********" + resp);
            let response = JSON.parse(resp);
            //response.push({ dummy: "value" });
            this.setState({
              interfaceJson1: response
            });
            this.toggleDiv();
          });

          console.log(
            "this.state.interfaceJson1[0] :" + this.state.interfaceJson1
          );
        }
        break;
  
     
    }
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
 


  render() {

    return (
      <div>
        <div class="container">
        <button type="submit"
                    class="btn btn-danger navbar-btn"
                    className="new" onClick={this.clickHandler.bind(this, 1)}
                    >
                    View Order Details
                    </button>
                  
                    <div class="col-lg-12 login-form">
                  {this.state.show && (
                    <Dummy interfaceJson1={this.state.interfaceJson1} />
                  )}
                </div>
         
        </div>
      </div>
    );
  }
}

export default GetOrders;
