// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract MoodDiary {
    /**
     * @author MrFrenzoid
     * @title Simple get / set storage variable contract.
     * @notice This contract is a solution for the 7th lvl freshman course on learnweb3.io.
     */

    /**
     * @notice String mood variable.
     */
    string mood = "Happy :D";

    /**
     * @notice Setter
     * @param _mood new value to set to the mood variable.
     */
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    /**
     * @notice Getter
     */
    function getMood() public view returns (string memory) {
        return mood;
    }
}
