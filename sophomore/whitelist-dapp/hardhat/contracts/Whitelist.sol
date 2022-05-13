//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {
    /**
     * @author MrFrenzoid
     * @title Simple NFT whitelist contract.
     * @notice This contract is a solution for the 8th lvl sophomore course on learnweb3.io.
     */

    /**
     * @notice Max number of whitelisted addresses allowed
     */
    uint8 public maxWhitelistedAddresses;

    /**
     * @notice Create a mapping of whitelistedAddresses, if an address is whitelisted, we would set it to true, it is false by default for all other addresses.
     */
    mapping(address => bool) public whitelistedAddresses;

    /**
     * @notice numAddressesWhitelisted would be used to keep track of how many addresses have been whitelisted
     */
    uint8 public numAddressesWhitelisted;

    /**
     * @notice Setting the Max number of whitelisted addresses, user will put the value at the time of deployment
     */
    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    /**
     * @notice addAddressToWhitelist - This function adds the address of the sender to the whitelist
     */
    function addAddressToWhitelist() public {
        // check if the user has already been whitelisted
        require(
            !whitelistedAddresses[msg.sender],
            "Sender has already been whitelisted"
        );

        // check if the numAddressesWhitelisted < maxWhitelistedAddresses, if not then throw an error.
        require(
            numAddressesWhitelisted < maxWhitelistedAddresses,
            "More addresses cant be added, limit reached"
        );

        // Add the address which called the function to the whitelistedAddress array
        whitelistedAddresses[msg.sender] = true;

        // Increase the number of whitelisted addresses
        numAddressesWhitelisted += 1;
    }
}
