import React, { Component } from "react";
import Identicon from "identicon.js";

import Options from "../Options/Options";

import logo from "../../assets/logo.jpg";
import Button from "../Shared/Button";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <img src={logo} alt="logo ethdevelop" width="40" /> &nbsp; 
          ethdevelop
        </div>
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
          
          </ul>
          <div className="form-inline my-2 my-lg-0 ">
            <div className="text-secondary mr-auto">
              <small id="account ">{this.props.account}</small>
            </div>
            {this.props.account ? (
              <img
                className="ml-2 identicon"
                width="30"
                height="30"
                src={`data:image/png;base64,${new Identicon(
                  this.props.account,
                  30
                ).toString()}`}
                alt="User Identicon"
              />
            ) : (
                <div onClick={() => this.props.connectWallet()}>
                <Button  text="Connect wallet" />
                </div>
              )}
            <Options></Options>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
