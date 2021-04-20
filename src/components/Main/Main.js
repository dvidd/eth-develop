
import React, { Component } from "react";

import CreationCard from "../CreationCard/CreationCard";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: true // for more quick develop in the interface (( take this offf ))
    };
  }
  changeCard() {
    this.setState({ create: !this.state.create });
  }

 

  renderCard() {
    const create = this.state.create;
    if (create) {
      return (
        <CreationCard
          createNewSwap={this.props.createNewSwap}
          balance={this.props.balance}
        />
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }

  returnInfo() {
    if (this.props.noWallet) {
    }
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        {this.returnInfo()}
        <div className="row">
          <div
            id="content mt-3"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "600px" }}
          >
            {/* Render Card of creation or search/swap */}
            {/* {this.renderCard()} */}
          </div>
        </div>
        {/* element for changing between views  */}

      </div>
    );
  }
}

export default Main;