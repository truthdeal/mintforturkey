require('dotenv').config();
const { API_URL, POLYGON_API_URL, ROPSTEN_API_URL , RINKEBY_API_URL , AVAX_API_URL , ETHERSCAN_API, PRIVATE_KEY } = process.env;
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
                 }
               }
             },
  defaultNetwork: "ropsten",
   networks: {
      hardhat: {},

      ropsten: {
         url: ROPSTEN_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      } ,
      rinkeby: {
        url: RINKEBY_API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
      } ,
      mainnet: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`]
      },
      polygon: {
       url: POLYGON_API_URL,
       accounts: [`0x${PRIVATE_KEY}`]
      },
      bsc: {
        url: `https://bsc-dataseed.binance.org/`,
        accounts: [`0x${PRIVATE_KEY}`]
       },
       avax: {
        url: AVAX_API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
       },
    },
  etherscan: {
    apiKey: ETHERSCAN_API
    }
};