
const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  const Verify = await ethers.getContractFactory("Verify");
  const verify = await Verify.deploy();

  await verify.deployed();

  console.log("Verify deployed to:", verify.address);
  console.log("Verifying...");

  // Wait for etherscan to notice that the contract has been deployed
  await sleep(60000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: verify.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
