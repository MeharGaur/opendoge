// deploy.js
const hre = require("hardhat");
async function main() {
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  // We get the contract to deploy
  const MoonmanRewards = await hre.ethers.getContractFactory("MoonmanRewards");
  const moonmanrewards = await MoonmanRewards.deploy();
  await moonmanrewards.deployed();
  console.log("MoonmanRewards deployed to:", moonmanrewards.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });