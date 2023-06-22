
const { ethers } = require("hardhat");

async function main() {
  const LW3Punks = await ethers.getContractFactory("LW3Punks");
  const lW3Punks = await LW3Punks.deploy("ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/");

  await lW3Punks.deployed();

  console.log("LW3Punks deployed to:", lW3Punks.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });