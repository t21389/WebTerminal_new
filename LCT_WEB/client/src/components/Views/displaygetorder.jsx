import React, { Component } from "react";

class Displaygetorder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interfaceJson1: ""
    };
  }

  render() {
    var jsonString = this.props.interfaceJson1;
    console.log("interfaceJson1 final***********: ", jsonString);
    console.log("length====>", jsonString.length);

    return (
      <div>
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>OrderId</th>
              <th>Connection Type</th>
              <th>Order Type</th>
              <th>Interface Id</th>
              <th>User Id</th>
              <th>Remote Ip</th>
              <th>State</th>
              <th>SDN Ready</th>
            </tr>
          </thead>
          <tbody>
            {jsonString.map(function(i) {
              return (
                <tr>
                  <td>{i.OrderId}</td>
                  <td>{i.ConnType}</td>
                  <td>{i.OrderType}</td>
                  <td>{i.InterfaceId}</td>
                  <td>{i.UserId}</td>
                  <td>{i.RemoteIp}</td>
                  <td>{i.State}</td>
                  <td>{i.SDNReady}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Displaygetorder;
