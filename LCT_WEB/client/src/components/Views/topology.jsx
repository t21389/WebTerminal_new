import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Discovery from "./discovery";

class Topology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickkedOn: false
    };
  }

  clickked = () => {
    this.setState({ clickkedOn: true });
  };
  render() {
    return (
      <Router>
        <div>
          <div class="row">
            <div class="col-md-12">
              <a class="brand" href="#">
                <Link to="/about">
                  <button
                    type="submit"
                    onClick={this.clickked.bind(this)}
                    class="btn btn-outline-primary"
                  >
                    DISCOVER NOW
                  </button>
                </Link>
                <Route path="/about" component={Discovery} />
                {/* <Route path="/about" render={()=> (
                this.state.clickkedOn ? (<Discovery/>) : (<Redirect to ="/about"/>))} /> */}
                <img
                  src={require("./../../assets/a.png")}
                  alt=""
                  height="10%"
                  vertical-align="middle"
                  border-style="none"
                  height="450px"
                  width="100%"
                  padding-left="120px"
                  padding-right="120px"
                  padding-top="0px"
                />
              </a>
            </div>
          </div>

          <div class="row">cfghcfg</div>
        </div>
      </Router>
    );
  }
}

export default Topology;
