async function main() {
    const Certificates = await hre.ethers.getContractFactory("Certificates");
    
    const CertificatesDeployed = await Certificates.deploy();

    await CertificatesDeployed.deployed();

    console.log("Deployed contract to: ", CertificatesDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });