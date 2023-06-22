require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");


// Tasks (npx hardhat run <task-name>)
task("accounts", "Prints the list of accounts", async (taskArgs, { ethers }) => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints an account's balance")
  .addPositionalParam("account", "The account's address")
  .setAction(async (taskArgs, { ethers }) => {
    const balance = await ethers.provider.getBalance(
      await addr(ethers, taskArgs.account)
    );
    console.log(formatUnits(balance, "ether"), "ETH");
  });

// List of networks (npx hardhat run script/deploy_script.js --network <network-name>)
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      forking: {
        url: process.env.POLYGON_MORALIS_URL,
      },
    },
    localhost: {
      url: "http://localhost:8545",
    },
    rinkeby: {
      url: process.env.RINKEBY_MORALIS_URL,
      accounts: [process.env.ACC_PRIV_KEY],
    },
    ropsten: {
      url: process.env.ROPSTEN_MORALIS_URL,
      accounts: [process.env.ACC_PRIV_KEY],
    },
    mumbai: {
      url: process.env.MUMBAI_MORALIS_URL,
      accounts: [process.env.ACC_PRIV_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_APIKEY,
    },
  },
};