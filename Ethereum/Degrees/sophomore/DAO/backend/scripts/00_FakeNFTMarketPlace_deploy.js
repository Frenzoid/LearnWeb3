
const { ethers } = require("hardhat");

async function main() {
  const FakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace");
  const fakeNFTMarketplace = await FakeNFTMarketplace.deploy();

  await fakeNFTMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to:", fakeNFTMarketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
