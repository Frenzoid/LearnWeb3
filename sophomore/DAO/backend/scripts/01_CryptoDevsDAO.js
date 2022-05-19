
const { ethers } = require("hardhat");
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS, FAKE_NFT_MARKETPLACE_CONTRACT_ADDRESS } = require("../constants");

async function main() {
    const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
    const cryptoDevsDAO = await CryptoDevsDAO.deploy(FAKE_NFT_MARKETPLACE_CONTRACT_ADDRESS, CRYPTO_DEVS_NFT_CONTRACT_ADDRESS);

    await cryptoDevsDAO.deployed();

    console.log("CryptoDevsDAO deployed to:", cryptoDevsDAO.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
