//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract MasterclassParticipant {
   address owner; 


   mapping(address => bool) whitelistedAddresses;
   event checkParticipant(bool result);

   constructor() {
       owner = msg.sender;
   }

   modifier onlyOwner(){
       require(msg.sender == owner, "Caller is not the owner");
       _;
   }

   function addAddress(address _addressToWhitelist) public onlyOwner {
       whitelistedAddresses[_addressToWhitelist] = true;
   }

   modifier isWhitelisted(address _address) {
       require(whitelistedAddresses[_address], "You are not whitelisted");
       _;
   }

    //caller of function 
   function isParticipant() public isWhitelisted(msg.sender) returns(bool){
       emit checkParticipant(true);
       return(true);
   }
}