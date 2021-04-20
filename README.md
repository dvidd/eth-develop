# Eth develop tools

Etheremum dapp protocol

## Folder structure

This repo have all the contracts of the protocol as well as the front end of the interface

    .
    ├── migrations          # Migrations of the smart contracts
    ├── public              # Public folder for the react interface
    ├── test                # Tests scripts for testing smart contracts
    └── src
        ├── abis            # Migration files for conection with the contracts
        ├── assets          # Assets for the interface
        ├── components      # React components for the interface
        ├── contracts       # Smart contracts written in Solidity

## Set Up in Local

You will need to set a local blockchain, you can do it using <a href="https://www.trufflesuite.com/ganache" target="_blank">ganache and truffle</a>

```shell
git clone https://github.com/dvidd/eth-develop
```

```shell
cd eth-develop
```

```shell
npm install
```

```shell
npm start
```

#### Building the contracts

```shell
truffle compile
```

#### Testing contracts

```shell
truffle test
```

#### Migrating contracts to blockchain

```shell
truffle migrate
```
