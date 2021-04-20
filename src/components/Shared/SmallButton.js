import React, { Component } from "react";

class SmallButton extends Component {
  render() {
    return (
      <button className="btn btn-dark tools">
        <ion-icon size="medium" name={this.props.name}></ion-icon>
      </button>
    );
  }
}

export default SmallButton;
