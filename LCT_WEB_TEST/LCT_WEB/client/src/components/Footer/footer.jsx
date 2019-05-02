import React, { Component } from "react";
import "./../../css/footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const themeBgColor = {
      background: this.props.mainThemeColor
    };

    return (
      <div class="footer">
        <p>
          © Copyright <strong>C-DOT</strong>. All Rights Reserved
        </p>
      </div>
    );
  }
}

export default Footer;
