// src='node_modules/web3/dist/web3.min.js'></script> 
import Web3 from ‘web3’; 

if (/** Tokenmint successful*/ false) {
  window.document.getElementsByClassName("positive").style.display = "block";
} else {
  window.document.getElementsByClassName("negative").style.display = "block";
}



async function loadWeb3() {
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
  }
}

async function loadContract() {
  return await new window.web3.eth.Contract(ABI, contractAddress);
}

async function load() {
  await loadWeb3();
  window.contract = await loadContract();
  //updateStatus('Ready!');
}


//function updateStatus(status) {
  //const statusEl = document.getElementById('status');
  //statusEl.innerHTML = status;
  //console.log(status);
//}

load();

