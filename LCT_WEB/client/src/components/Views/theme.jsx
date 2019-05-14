import React, { Component } from 'react';
import "./../../css/theme.css";

class Theme extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown-menu"
    };
  }

  handleClick = () => {
    
    if (this.state.classes === "dropdown-menu") {
      this.setState({ classes: "dropdown-menu show" });
    } else {
      this.setState({ classes: "dropdown-menu" });
    }
  };

  render() {

    console.log("this.props ", this.props);
    return (


      <div>
        <div class="fixed-plugin">
          <div class="dropdown show-dropdown ">
            <div onClick={this.handleClick}>
              <i class="fa fa-cog fa-2x"></i>
            </div>
            <ul class={this.state.classes}>
              <li class="header-title">NAVBAR BACKGROUND</li>
              <li class="adjustments-line">

                <div class="badge-colors text-center">
                  <span class="badge filter badge-warning" data-color="indigo"
                  onClick={() => {
                    console.log('on click primary ', this.props.handleBgClick)
                    this.props.handleBgClick("#1a237e");
                  }}
                  />
                    <span class="badge filter badge-primary" data-color="purple"
                  onClick={() => {
                    console.log('on click primary ', this.props.handleBgClick)
                    this.props.handleBgClick("#4a148c");
                  }}
                  />
                    <span class="badge filter badge-danger" data-color="primary"
                  onClick={() => {
                    console.log('on click primary ', this.props.handleBgClick)
                    this.props.handleBgClick("#004d40 ");
                  }}
                  />
                  <span class="badge filter badge-info active" data-color="blue" 
                   onClick={() => {
                    console.log('on click primary ', this.props.handleBgClick)
                    this.props.handleBgClick("linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%)");
                  }}
                  />
                  <span class="badge filter badge-success" data-color="green"
                  onClick={() => {
                    console.log('on click primary ', this.props.handleBgClick)
                    this.props.handleBgClick("#2bbbad");
                  }}
                  />
                </div>

              </li>
              <li class="adjustments-line text-center color-change">
                <span class="color-label">LIGHT MODE</span>
                <span class="badge light-badge mr-2"
                                onClick={() => this.props.activateModeHandler("white")}
                />
                <span class="badge dark-badge ml-2"
                onClick={() => this.props.activateModeHandler("black")}
                />
                <span class="color-label">DARK MODE</span>
              </li>
            </ul>
            </div>
            </div>

      </div>


    )


  }



}



export default Theme;


















