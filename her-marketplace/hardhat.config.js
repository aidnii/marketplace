require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
//require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
//require("hardhat-deploy");

require("dotenv").config();

//const fs = require("fs");
//const privateKey = fs.readFileSync(".env").toString();

const privateKey = process.env.PRIVATE_KEY.toString();
const projectId = "7744a5064f8043a2bfa39aba3e953b81";


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.9",
};

