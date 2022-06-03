# MasterclassNFT

### This DApp rewards participants of the “Phoenix Guild” masterclasses with an NFT, which later can be used for future masterclasses.

_Screenshot of the DApp._

“The Phoenix Guild” (TPG) is a female blockchain-community, educating womxn in web3 development. This DApp was built as part of a soliditiy bootcamp of TPG. The Phoenix guild is regularly holding “masterclasses” for its community, inviting blockchain developers to provide a workshop about different blockchain-development topics.

The idea of an on-chain CV becomes more and more popular, the unique nature of NFTs allows them to be used as a certification. NFT-diplomas are transparent and less susceptible to counterfeiting and manipulation. However, in most cases, the NFT-certificate has to be issued by a trusted authority.

We chose to implement an NFT-certificate for the TPG-masterclasses. An NFT would be an easy way to verify attendance of the sessions. To make sure, the certification can’t be sold or forwarded to another person, the NFTs are non-transferrable (sometimes referred to as “soul-bound” tokens). The mentors or admins of the masterclasses will collect die addresses of the participants and map them in the smart contract, so the NFTs can only be requested by these accounts.

Later, these NFTs could serve as a ticket for the next masterclasses or guarantee a discount for paid events (sort of gate-keeping). Just like with certificates, NFT tickets can reduce fraud, false identities, duplication or expensive reselling.

Like this, the NFTs have a second use case, making sure that loyal participants get rewarded for learning. Therefore, the smart contract has to check for the respective NFT when requesting a ticket or a discount.
