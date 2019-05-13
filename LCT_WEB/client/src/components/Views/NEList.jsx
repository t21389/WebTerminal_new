import React, { Component } from "react";
import "./../../css/ne.css";
class NEList extends React.Component {

  state = {
    
  }

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
      <div class="container">
        <div class="row">
     <div class="col-md-12">
          <div class="panel panel-default" className="default">
            <div class="panel-heading clearfix" className="head">
              <i class="icon-calendar" />
              <h3 class="panel-title">Get/Set NE Information</h3>
            </div>
            <div class="panel-body"  className="defaultpanel">
             <div class="row">
                <div class="col-sm-6 other">
                  <div class="input-group  mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Site Name:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        NE Type
                      </label>
                    </div>
                    <select
                      class="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.value}
                      onChange={this.onChange.bind(this)}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                       Degree:
                      </label>
                    </div>
                    <select
                      class="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.value}
                      onChange={this.onChange.bind(this)}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6 other2">
                  <div class="input-group  mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Station Name:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                       GNE Flag
                      </label>
                    </div>
                    <select
                      class="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.value}
                      onChange={this.onChange.bind(this)}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                       ILA Enable:
                      </label>
                    </div>
                <span class="input-group-addon" className="addoncheck">
                  <input type="checkbox"></input>
                </span>
              </div>
               
                </div>
            
            </div>
            </div>
          </div>
           </div>
 
      </div>
      
      <div class="row">
     <div class="col-md-12">
          <div class="panel panel-default" className="default">
            <div class="panel-heading clearfix" className="head">
              <i class="icon-calendar" />
              <h3 class="panel-title">POTP Details</h3>
            </div>
            <div class="panel-body"  className="defaultpanel">
             <div class="row">
             <div class="col-sm-6 other">
             <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                       POTP Type
                      </label>
                    </div>
                    <select
                      class="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.value}
                      onChange={this.onChange.bind(this)}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6 other2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Enable POTP LCT
                      </label>
                    </div>
                <span class="input-group-addon" className="addoncheck">
                  <input type="checkbox"></input>
                </span>
              </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>


            <div class="row">
     <div class="col-md-6">
          <div class="panel panel-default" className="default">
            <div class="panel-heading clearfix" className="head">
              <i class="icon-calendar" />
              <h3 class="panel-title">IP Details</h3>
            </div>
            <div class="panel-body"  className="defaultpanel">
             <div class="row">
             <div class="col-sm-12 other">
             <div class="input-group  mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">IP Address:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
               
                  <div class="input-group  mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Subnet:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div class="input-group  mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Gateway:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div class="input-group  mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">IPv6:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div class="input-group  mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">MAC:</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
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
export default NEList;
