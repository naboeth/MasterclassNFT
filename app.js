import MasterclassNFTjson from "./ABIs/MasterclassNFT.json"
import MasterclassParticipantjson from "./ABIs/MasterclassParticipant1.json" //smart contract without event/emit
import MasterclassParticipantjson2 from "./ABIs/MasterclassParticipant2.json" //smart cotnract with event/emit

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
  
  const contractAddress = "0x03893D4C59810040348AD07ec4c5da7DF18EbD0b" //NFT contract
  const contractAddress1 = "0x2dd6Fb833144BE26419306A7B1E8b29D50cf44A3" //whitelistContract without event
  const contractAddress2 = "0xF174234d1b003D9CfC38412fEa05c84E0Ee6Ba2e" ////whitelistContract witho event
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
	  window.participantContract = await new window.web3.eth.Contract(MasterclassParticipantjson2, contractAddress2);
	  const val = participantContract.methods.isParticipant(); //how to access the return value of isParticipant() since the modfiere takees in the address as parameter? 
	  //how to read the event value?
	  const vals = true;
	  if (vals === true) {
		console.log("isParticipant() results ", val);
		const mint = await window.contract.methods.mint(1).send({from: participant}	
		console.log("mint succeeded");
	  }	
	  console.log("check failed");
	  );
	  
  }
  
  // if (/** Tokenmint successful*/ false) {
//   window.document.getElementsByClassName("positive").style.display = "block";
// } else {
//   window.document.getElementsByClassName("negative").style.display = "block";
// }



