//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Verify {
    /**
     * @author MrFrenzoid
     * @title Simple Contract to verify.
     * @notice This contract is a solution for the 7th lvl junior course on learnweb3.io.
     */

    /// @dev variable.
    string private greeting;

    constructor() {}

    function hello(bool sayHello) public pure returns (string memory) {
        if (sayHello) {
            return "hello";
        }
        return "";
    }
}
