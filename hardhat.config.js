require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.7",
    networks: {
        hardhat: {
            chainId: 31337
        },
        ropsten: {
            url: "https://ropsten.infura.io/v3/37d2c4c42b2b44bdb26cf24ff3936d10",
            accounts: ['0x9f123b47a8d14f22e3073c3eb5ed30ba6247a1a725de11c375eab7cea48923a7']
        }
    }
}