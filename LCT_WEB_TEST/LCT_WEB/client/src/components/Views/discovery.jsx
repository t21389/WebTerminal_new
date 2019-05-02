/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import React, { Component } from "react";
import "./../../css/discovery.css";
import Local from "./local";
import Remote from "./remote";
import Modal from "./modal";

class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select",
      show: false,
      shows: false,
      showM: false,
      username: "",
      interfaceJson: ""
    };
    this.toggleDiv = this.toggleDiv.bind(this);
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  clickHandler(event) {
    console.log("cliked here", event, "and", this.props);

    switch (event) {
      case 1:
        {
          console.log("event 1: callinterface", this.props);
          this.props.callback(Component).then(resp => {
            console.log("response final ", JSON.parse(resp));
            let response = JSON.parse(resp);
            response.push({ dummy: "value" });
            this.setState({
              interfaceJson: response
            });
          });

          // console.log(
          //   "this.state.interfaceJson[0] :" + this.state.interfaceJson[0]
          // );
          this.toggleDiv();
        }
        break;
    }
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  toggleDivRemote = () => {
    const { shows } = this.state;
    this.setState({ shows: !shows });
  };

  showModal = () => {
    this.setState({
      ...this.state,
      showM: !this.state.showM
    });
  };

  render() {
    // console.log("rerender " + this.state.interfaceJson);
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2" />
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true" />
              </div>
              <div class="col-lg-12 login-title">
                <h1>Optical Transport Controller</h1>
                {/* <input
                  type="button"
                  onClick={this.showModal}
                  onClick={this.clickHandler.bind(
                    this,
                    1,
                    <Modal interfaceJson={this.interfaceJson} />
                  )}
                  value="Show Modal"
                /> */}

                {/* <Modal showM={this.state.showM}>this is abc </Modal> */}
                {/* <Modal
                  class="modal fade"
                  showM={this.state.showM}
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                /> */}
                {/* <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={this.showModal}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <table class="table table-hover table-dark">
                          <thead class="black white-text">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Interface Name</th>
                              <th scope="col">Ip</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>eth0</td>
                              <td>10.5.0.10</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>eth1</td>
                              <td>10.5.0.11</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>eth2</td>
                              <td>10.5.0.12</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div> */}

                <div class="row">
                  <div class="col-md-6">
                    <button
                      // onClick={this.toggleDiv}
                      onClick={this.clickHandler.bind(this, 1)}
                    >
                      Local
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button onClick={this.toggleDivRemote}>Remote</button>
                  </div>
                </div>

                <div class="col-lg-12 login-form">
                  {this.state.show && (
                    <Local interfaceJson={this.state.interfaceJson} />
                  )}
                </div>
                <div class="col-lg-12 login-form">
                  {this.state.shows && <Remote />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discovery;