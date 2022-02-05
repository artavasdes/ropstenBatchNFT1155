require('dotenv').config();

require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

//Ropsten Network
/*
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
*/

//Mumbai(Polygon testnet)
/*
module.exports = {
   defaultNetwork: "matic",
   networks: {
     hardhat: {
     },
     matic: {
       url: "https://rpc-mumbai.maticvigil.com",
       accounts: [process.env.PRIVATE_KEY]
     }
   },
   solidity: {
     version: "0.8.0",
     settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   },
 }
 */

 //Rinkeby
 module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "rinkeby",
  networks: {
     hardhat: {},
     rinkeby: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
  },
}


