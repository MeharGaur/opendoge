require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.9",
    networks: {
        doge_testnet: {
            url: "https://rpc-testnet.dogechain.dog",
            accounts: ['6ffdd6c974d4b1a1c71ec196d15941f7c954b3e781039483fba6d406a4b020e9']
        }
    }
}