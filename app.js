//import Web3 from ‘web3’; 

//const MasterclassNFTjson = require('./MasterclassNFT.json');
import MasterclassNFT from "../ABI/MasterclassNFT.json";
import MasterclassNFT from "./MasterclassNFT.json";

async function loadWeb3() {
	if (window.ethereum) {
	  window.web3 = new Web3(window.ethereum);
	  window.ethereum.enable();
	}
  }
  
  async function load() {
	await loadWeb3();
	console.log("Connected")
  }
  
  contractAddress = "0x03893D4C59810040348AD07ec4c5da7DF18EbD0b"
  
  async function loadContract() {
	return await new window.web3.eth.Contract(MasterclassNFTjson, contractAddress);
  }
  
  async function load() {
	await loadWeb3();
	window.contract = await loadContract();
	console.log("Contract loaded");
  }
  
   //mint NFT
  async function getCurrentAccount() {
	  const accounts = await window.web3.eth.getAccounts();
	  console.log(accounts);
	  return accounts[0];
	}
	
  async function mintNFT() {
	  const participant = await getCurrentAccount();
	  console.log("Fetched Address of Participant");
	  const mint = await window.contract.methods.mint(1).send({from: participant});
	  console.log("mint succeeded");
  }
  
  // if (/** Tokenmint successful*/ false) {
//   window.document.getElementsByClassName("positive").style.display = "block";
// } else {
//   window.document.getElementsByClassName("negative").style.display = "block";
// }



