async function loadWeb3() {
	if (window.ethereum) {
	  window.web3 = new Web3(window.ethereum);
	  window.ethereum.enable();
	}
  }

  contractAddress = "0x03893D4C59810040348AD07ec4c5da7DF18EbD0b"
  
  ABI = [
	  {
		  "inputs": [
			  {
				  "internalType": "string",
				  "name": "name",
				  "type": "string"
			  },
			  {
				  "internalType": "string",
				  "name": "symbol",
				  "type": "string"
			  }
		  ],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
	  },
	  {
		  "inputs": [],
		  "name": "ApprovalCallerNotOwnerNorApproved",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "ApprovalQueryForNonexistentToken",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "ApprovalToCurrentOwner",
		  "type": "error"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
			  },
			  {
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "approve",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "ApproveToCaller",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "BalanceQueryForZeroAddress",
		  "type": "error"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "uint256",
				  "name": "quantity",
				  "type": "uint256"
			  }
		  ],
		  "name": "mint",
		  "outputs": [],
		  "stateMutability": "payable",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "MintToZeroAddress",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "MintZeroQuantity",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "OwnerQueryForNonexistentToken",
		  "type": "error"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "from",
				  "type": "address"
			  },
			  {
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
			  },
			  {
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "from",
				  "type": "address"
			  },
			  {
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
			  },
			  {
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  },
			  {
				  "internalType": "bytes",
				  "name": "_data",
				  "type": "bytes"
			  }
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "operator",
				  "type": "address"
			  },
			  {
				  "internalType": "bool",
				  "name": "approved",
				  "type": "bool"
			  }
		  ],
		  "name": "setApprovalForAll",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "TransferCallerNotOwnerNorApproved",
		  "type": "error"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "from",
				  "type": "address"
			  },
			  {
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
			  },
			  {
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "transferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "TransferFromIncorrectOwner",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "TransferToNonERC721ReceiverImplementer",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "TransferToZeroAddress",
		  "type": "error"
	  },
	  {
		  "inputs": [],
		  "name": "URIQueryForNonexistentToken",
		  "type": "error"
	  },
	  {
		  "anonymous": false,
		  "inputs": [
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "approved",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "Approval",
		  "type": "event"
	  },
	  {
		  "anonymous": false,
		  "inputs": [
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "operator",
				  "type": "address"
			  },
			  {
				  "indexed": false,
				  "internalType": "bool",
				  "name": "approved",
				  "type": "bool"
			  }
		  ],
		  "name": "ApprovalForAll",
		  "type": "event"
	  },
	  {
		  "anonymous": false,
		  "inputs": [
			  {
				  "indexed": false,
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
			  },
			  {
				  "indexed": false,
				  "internalType": "uint256",
				  "name": "quantity",
				  "type": "uint256"
			  }
		  ],
		  "name": "NFTminted",
		  "type": "event"
	  },
	  {
		  "anonymous": false,
		  "inputs": [
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "from",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "Transfer",
		  "type": "event"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
			  }
		  ],
		  "name": "balanceOf",
		  "outputs": [
			  {
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "getApproved",
		  "outputs": [
			  {
				  "internalType": "address",
				  "name": "",
				  "type": "address"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
			  },
			  {
				  "internalType": "address",
				  "name": "operator",
				  "type": "address"
			  }
		  ],
		  "name": "isApprovedForAll",
		  "outputs": [
			  {
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "name",
		  "outputs": [
			  {
				  "internalType": "string",
				  "name": "",
				  "type": "string"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "ownerOf",
		  "outputs": [
			  {
				  "internalType": "address",
				  "name": "",
				  "type": "address"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "bytes4",
				  "name": "interfaceId",
				  "type": "bytes4"
			  }
		  ],
		  "name": "supportsInterface",
		  "outputs": [
			  {
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "symbol",
		  "outputs": [
			  {
				  "internalType": "string",
				  "name": "",
				  "type": "string"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "uint256",
				  "name": "tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "tokenURI",
		  "outputs": [
			  {
				  "internalType": "string",
				  "name": "",
				  "type": "string"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "totalSupply",
		  "outputs": [
			  {
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  }
  ]
  
  async function loadContract() {
	return await new window.web3.eth.Contract(ABI, contractAddress);
  }
  
  async function load() {
	await loadWeb3();
	window.contract = await loadContract();
	console.log("Contract instance created");
  }
  
   //get Account address
  async function getCurrentAccount() {
	  const accounts = await window.web3.eth.getAccounts();
	  console.log(accounts);
	  return accounts[0];
	}
	
	//mint Masterclass NFT Token
  async function mintNFT() {
	  const participant = await getCurrentAccount();
	  console.log("Fetched Address of Participant");
	  const mint = await window.contract.methods.mint(1).send({from: participant});
	  console.log("mint succeeded");
  }
  
if (/** Tokenmint successful*/ false) {
  window.document.getElementsByClassName("positive").style.display = "block";
} else {
  window.document.getElementsByClassName("negative").style.display = "block";
}



