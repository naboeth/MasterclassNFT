//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MasterclassNFT is ERC721{ 
    //will inherit all field and functions from ERC721
    constructor(string memory name, string memory symbol) 
        //passing to parent contract the variables from constructor
        ERC721  (name, symbol) {
    }
}