
const { ethers } = require("hardhat");
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const CryptoDevToken = await ethers.getContractFactory("CryptoDevToken");
  const cryptoDevsToken = await CryptoDevToken.deploy(CRYPTO_DEVS_NFT_CONTRACT_ADDRESS);

  await cryptoDevsToken.deployed();

  console.log("CryptoDevsToken deployed to:", cryptoDevsToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
