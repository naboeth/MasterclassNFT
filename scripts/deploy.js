async function main() {
    const MasterclassNFT = await hre.ethers.getContractFactory("MasterclassNFT");
    
    const MasterclassNFTDeployed = await MasterclassNFT.deploy("ThePhoenixGuild", "TPG");

    await MasterclassNFTDeployed.deployed();

    console.log("Deployed contract to: ", MasterclassNFTDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });