
const hre = require("hardhat");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const CryptoDevs = await hre.ethers.getContractFactory("CryptoDevs");
  const cryptoDevs = await CryptoDevs.deploy(METADATA_URL, WHITELIST_CONTRACT_ADDRESS);

  await cryptoDevs.deployed();

  console.log("CryptoDevs deployed to:", cryptoDevs.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
