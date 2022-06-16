const { expect } = require("chai"); //chai is an assertion library
//import "hardhat/console.sol";


describe("MasterclassNFT", function(){
    it("should return correct name and symbol", async function () {
        //const MasterclassNFT = await hre.ethers.getContractFactory("MasterclassNFT"); //allows to get actual class from contract
        const MasterclassNFT = await hre.ethers.getContractFactory("MasterclassNFTA");

        const MasterclassNFTDeployed = await MasterclassNFT.deploy("ThePhoenixGuild", "TPG");

        await MasterclassNFTDeployed.deployed();

        expect(await MasterclassNFTDeployed.name()).to.equal("ThePhoenixGuild");

        expect(await MasterclassNFTDeployed.symbol()).to.equal("TPG");
    
    });
})

describe("MasterclassParticipant", function() {
    let owner;
    let addr1;
    let addr2;
    let ParticipantDeployed;

    beforeEach(async function () {

        const Participant = await hre.ethers.getContractFactory("MasterclassParticipant");
        [owner, addr1, addr2] = await ethers.getSigners();
        ParticipantDeployed = await Participant.deploy();
        //console.log(ParticipantDeployed);
        });

    
    describe("Deployment", function() {
        it("should set the right owner", async function () {
            expect(await ParticipantDeployed.owner()).to.equal(owner.address);
        });

        it("only owner can add address", async function () {
            //expect(await ParticipantDeployed.addAddress(addr1)).to.throw(error);
            //assumption is that when owner does not call, it should throw an error
        });

        it("check whether caller is on whitelist", async function () { 
        });
    });
});