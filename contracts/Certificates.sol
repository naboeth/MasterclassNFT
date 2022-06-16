//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Certificates {

    struct Certificate{
        string class; //Solidity Bootcamp
        uint year;
        address sender;
        address receiver; 
        string message; // Successfully completed the "XY"
    }

    mapping(address => Certificate) public certificateEntries;
    event NewCertificate(string class, uint year, address sender, address receiver, string message);

    constructor(){}

    function createCertificate(string memory class, string memory message, address receiver, uint year)
    public payable {
        certificateEntries[msg.sender] = Certificate(class, year, msg.sender, receiver, message);
    }

    function getCertificate() public view returns(Certificate memory) {
        return certificateEntries[msg.sender];
    }

}