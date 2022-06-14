import MasterclassNFTjson from "./ABIs/MasterclassNFT.json"
import MasterclassParticipantjson from "./ABIs/MasterclassParticipant.json"

//initialize ethereum provider 
async function loadWeb3() {
	if (window.ethereum) {
	  window.web3 = new Web3(window.ethereum);
	  window.ethereum.enable();
	}
  }
  
  window.load = async function load() {
	await loadWeb3();
	console.log("Connected")
  }
  
  const contractAddress = "0x03893D4C59810040348AD07ec4c5da7DF18EbD0b"
  const contractAddress2 = "0x2dd6Fb833144BE26419306A7B1E8b29D50cf44A3"
  console.log("Transition to load Contract");

  async function loadContract() {
	console.log("Contract loaded");
	return await new window.web3.eth.Contract(MasterclassNFTjson, contractAddress);
  }
  
  async function loadNFT() {
	await loadWeb3();
	window.contract = await loadContract();
	console.log(window.contract);
	console.log("Contract instance created");
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



