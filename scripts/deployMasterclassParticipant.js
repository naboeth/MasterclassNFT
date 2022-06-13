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


//deployed contract to : 0x03893D4C59810040348AD07ec4c5da7DF18EbD0b