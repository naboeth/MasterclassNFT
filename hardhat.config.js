/**
 * @type import('hardhat/config').HardhatUserConfig
 */

//add requirement for testing
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.7",
};

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// Replace this private key with your account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};



