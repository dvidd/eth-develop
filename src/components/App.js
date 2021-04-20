import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

import ethdevelop from "../abis/ethdevelop.json";

import Web3 from "web3";

import "./App.css";

import Loader from "./Shared/Loader";

// Router

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      ethDevelop: {},
      balance: 0,
      account: "",
      latestID: 0,
      id: null,
      noWallet: false
    };
  }

  async componentWillMount() { 
    this.connectWallet()
  }

  // TODO :
  // Conect wallet with other providers  :
  connectWallet =  async () => {
    const walletInstall = typeof window.web3 !== "undefined";
    this.setState({ walletInstall });
    if (walletInstall) {
      await this.loadWeb3();
      await this.loadBlockchainData();
    } else {
      this.setState({ noWallet: true });
    }
  
  }
  async loadWeb3() {
    // Load web3 current provider
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // Is not install metamask or other provider
      alert("You need to have Metamask installed in your browser to use ethdevelop")
      this.setState({ noWallet: true });
    }
  }
  async loadBlockchainData() {
    if (window.ethereum) {
      const web3 = window.web3;
      // Get the accounts
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      // Load ethdevelop contract
      const ethdevelopData = ethdevelop.networks[networkId];
      if (ethdevelopData) {
        const ethdevelopContract = new web3.eth.Contract(ethdevelopContract.abi, ethdevelopContract.address);
        this.setState({ ethdevelopData:ethdevelopContract });
      } else {
        window.alert("Ethdevelop contract not deployed to detected network.");
      }
    }
    this.setState({ loading: false });
  }

  create = (_description, _amount, _toAddress) => {
    this.setState({ loading: true });
    this.state.ethDevelop.methods
      .createNewSwap(
        _description,
        window.web3.utils.toWei(_amount, "ether"),
        _toAddress
      )
      .send({
        from: this.state.account,
        value: window.web3.utils.toWei(_amount, "ether")
      })
      .on("transactionHash", hash => {
        this.setState({ loading: false });
      });
  };



  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loader></Loader>
        ) : (
          <>
          <Navbar account={this.state.account}   connectWallet={this.connectWallet}/>
            <Main
              account={this.state.account}
              noWallet={this.state.noWallet}
              conectWallet={this.connectWallet}
            />
            </>
          )}
      </div>
    );
  }
}

export default App;
