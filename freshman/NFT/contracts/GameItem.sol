// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// GameItem is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract GameItem is ERC721 {
    /**
     * @author MrFrenzoid
     * @title Simple NFT.
     * @notice This contract is a solution for the 9th lvl freshman course on learnweb3.io.
     */

    /**
     * @notice Constructor of the contract, notice how the constructor call its parent's constructor, since this contract
     * inherits from the ERC721 contract.
     */
    constructor() ERC721("GameItem", "ITM") {
        // mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}
