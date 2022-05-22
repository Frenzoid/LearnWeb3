
const hre = require("hardhat");

async function main() {

  const Whitelist = await hre.ethers.getContractFactory("Whitelist");
  const whitelist = await Whitelist.deploy("Hello, Hardhat!");

  await whitelist.deployed();

  console.log("Whitelist deployed to:", whitelist.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
