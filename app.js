import MasterclassNFTjson from "./ABIs/MasterclassNFT.json"
import MasterclassParticipantjson from "./ABIs/MasterclassParticipant.json"
import MasterclassParticipantjson2 from "./ABIs/MasterclassParticipant2.json"

//initialize ethereum provider 
async function loadWeb3() {
	if (window.ethereum) {
	  window.web3 = new Web3(window.ethereum);
	  window.ethereum.enable();
	}
  }
  
  window.load = async () => {
	await loadWeb3();
	window.contract = await loadContract();
	console.log(window.contract);
	console.log("Contract instance created");
  }
  
  const contractAddress = "0x03893D4C59810040348AD07ec4c5da7DF18EbD0b"
  const contractAddress2 = "0x2dd6Fb833144BE26419306A7B1E8b29D50cf44A3"
  const contractAddress3 = "0xF174234d1b003D9CfC38412fEa05c84E0Ee6Ba2e"
  console.log("Transition to load Contract");

  async function loadContract() {
	console.log("Contract loaded");
	return await new window.web3.eth.Contract(MasterclassNFTjson, contractAddress);
  }
  

   //mint NFT
  async function getCurrentAccount() {
	  const accounts = await window.web3.eth.getAccounts();
	  console.log(accounts);
	  return accounts[0];
	}
	
  window.mintNFT = async () => {
	  const participant = await getCurrentAccount();
	  console.log("Participant", participant);
	  console.log("Fetched Address of Participant");
	  //window.participantContract = await new window.web3.eth.Contract(MasterclassParticipantjson, contractAddress2);
	  window.participantContract = await new window.web3.eth.Contract(MasterclassParticipantjson2, contractAddress3);
	  const val = participantContract.methods.isParticipant();
	  //emit an event

	 
	  const vals = true;
	  if (vals === true) {
		console.log("isParticipant() results ", val);
	  }	
	  console.log("check failed");
	  const mint = await window.contract.methods.mint(1).send({from: participant});
	  console.log("mint succeeded");
  }
  
  // if (/** Tokenmint successful*/ false) {
//   window.document.getElementsByClassName("positive").style.display = "block";
// } else {
//   window.document.getElementsByClassName("negative").style.display = "block";
// }



