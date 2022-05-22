
const hre = require("hardhat");

async function main() {

  const FlashLoanExample = await hre.ethers.getContractFactory("FlashLoanExample");
  const flashLoanExample = await FlashLoanExample.deploy("Hello, Hardhat!");

  await flashLoanExample.deployed();

  console.log("Greeter deployed to:", flashLoanExample.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
