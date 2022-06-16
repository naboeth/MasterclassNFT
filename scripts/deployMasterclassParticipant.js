const { messagePrefix } = require("@ethersproject/hash");

async function main() {
    const MasterclassParticipant = await hre.ethers.getContractFactory("MasterclassParticipant");
    
    
    const MasterclassParticipantDeployed = await MasterclassParticipant.deploy();

    await MasterclassParticipantDeployed.deployed();

    console.log("Deployed contract to: ", MasterclassParticipantDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


//deployed contract to : 0x2dd6Fb833144BE26419306A7B1E8b29D50cf44A3