const { expect } = require("chai"); //chai is an assertion library


describe("MasterclassNFT", function(){
    it("should return correct name and symbol", async function () {
        const MasterclassNFT = await hre.ethers.getContractFactory("MasterclassNFT"); //allows to get actual class from contract

        const MasterclassNFTDeployed = await MasterclassNFT.deploy("ThePhoenixGuild", "TPG");

        await MasterclassNFTDeployed.deployed();

        expect(await MasterclassNFTDeployed.name()).to.equal("ThePhoenixGuild");

        expect(await MasterclassNFTDeployed.symbol()).to.equal("TPG");
    
    });
})