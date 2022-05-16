const { ethers } = require("hardhat");

async function main() {


  // We get the contract to deploy
  const GameItem = await ethers.getContractFactory("GameItem");
  const gameItem = await GameItem.deploy();

  await gameItem.deployed();

  console.log("GameItem deployed to:", gameItem.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
