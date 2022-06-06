//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol"; //useful for debugging

contract MasterclassNFT is ERC721{ 
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    event NFTminted(address sender, uint256 tokenId);

    //will inherit all field and functions from ERC721
    constructor(string memory name, string memory symbol) 
        //passing to parent contract the variables from constructor
        ERC721  (name, symbol) {
            console.log("NFT name", name);
            console.log("with symbol:", symbol);
            console.log("msg.sender:", msg.sender);
    }

    // function mintToken(address owner)



}