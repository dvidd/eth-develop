const ethDevelop = artifacts.require("ethdevelop");
module.exports = async function(callback) {
  let ethdevelop = await ethDevelop.deployed();
  balance = await ethdevelop.getBalance();
  console.log("Balance of the contract");
  console.log(balance);
  callback();
};
// truffle exec test/CheckBalance.js
