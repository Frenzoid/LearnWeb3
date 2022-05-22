
const { ethers } = require("hardhat");
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");
require("@nomiclabs/hardhat-etherscan");


async function main() {
  const RandomWinnerGame = await ethers.getContractFactory("RandomWinnerGame");
  const randomWinnerGame = await RandomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  );
  await randomWinnerGame.deployed();

  console.log("RandomWinnerGame deployed to:", randomWinnerGame.address);
  console.log("Verifying...");

  // Wait for etherscan to notice that the contract has been deployed
  await sleep(60000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: randomWinnerGame.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
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
