const { messagePrefix } = require("@ethersproject/hash");

async function main() {
    //const MasterclassNFT = await hre.ethers.getContractFactory("MasterclassNFT"); //is the name of the contract itself
    const MasterclassNFT = await hre.ethers.getContractFactory("MasterclassNFTA");
    
    
    const MasterclassNFTDeployed = await MasterclassNFT.deploy("ThePhoenixGuild", "TPG");

    await MasterclassNFTDeployed.deployed();

    console.log("Deployed contract to: ", MasterclassNFTDeployed.address);

    const Mint = MasterclassNFTDeployed.mint(3);
    console.log("Minted NFTS");

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });