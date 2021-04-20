import React, { Component } from "react";

import Logo from "../../assets/logo.png";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={Logo} alt="logo" />
      </div>
    );
  }
}

export default Loader;
