
const { ethers } = require("hardhat");
const { ICO_ADDRESS } = require("../constants");

async function main() {
  const Exchange = await ethers.getContractFactory("Exchange");
  const exchange = await Exchange.deploy(ICO_ADDRESS);

  await exchange.deployed();

  console.log("FakeNFTMarketplace deployed to:", exchange.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
