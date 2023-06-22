// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract LW3Token is ERC20 {
    /**
     * @author MrFrenzoid
     * @title Too simple ERC-20 Token.
     * @notice This contract is a solution for the 8th lvl freshman course on learnweb3.io.
     */

    /**
     * @notice Constructor of the contract.
     * @param _name Name of the token.
     * @param _symbol Symbol of the token.
     */
    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        _mint(msg.sender, 10 * 10**18);
    }
}
