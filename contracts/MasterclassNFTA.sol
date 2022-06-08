//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "erc721a/contracts/ERC721A.sol"; //fantastic library by Azuki

import "hardhat/console.sol"; //useful for debugging

contract MasterclassNFTA is ERC721A{ 
    
    event NFTminted(address sender, uint256 quantity);

    constructor(string memory name, string memory symbol) 
        //passing to parent contract the variables from constructor
        ERC721A (name, symbol) {
            console.log("Deploy NFT with cheap gas");
            console.log("NFT name", name);
            console.log("with symbol:", symbol);
            console.log("msg.sender:", msg.sender);
    }


    function mint(uint256 quantity) external payable { 
            _mint(msg.sender ,quantity);
            emit NFTminted(msg.sender, quantity);
    }
}