# MasterclassNFT

**This DApp rewards participants of the “Phoenix Guild” masterclasses with an NFT, which later can be used for future masterclasses**

![Screenshot of the front-end](https://github.com/naboeth/MasterclassNFT/blob/master/pictures/Screenshot%20.png)

“The Phoenix Guild” (TPG) is a female blockchain-community, educating womxn in web3 development. This DApp was built as part of a soliditiy bootcamp of TPG. The Phoenix guild is regularly holding “masterclasses” for its community, inviting blockchain developers to provide a workshop about different web3-coding topics.

The idea of an on-chain CV becomes more and more popular, the unique nature of NFTs allows them to be used as a certification. NFT-diplomas are transparent and less susceptible to counterfeiting and manipulation. Additionally, the certificate can’t get lost or destroyed.

### The idea

That makes NFTs a suitable tool for our purpose: We chose to implement an NFT-certificate for the TPG-masterclasses. An NFT would be an easy way to verify attendance of the sessions. To make sure, the certification can’t be sold or forwarded to another person, the NFTs are non-transferrable (sometimes referred to as “soul-bound” tokens).

However, in this case, the NFT-certificate has to be issued by a trusted authority, to make sure only the actual participants get the NFT-certificate. The mentors or admins of the masterclasses will collect the addresses of the attendees and map them in the smart contract, so the NFTs can later be requested by these “whitelisted” accounts.

At the same time, the NFTs could have additional advantages linked to it, either in a form of reward (”NFT perks/goodies”) or special access (”gate-keeping”). Later, these NFTs could serve as a ticket for the next masterclasses, allow access to permitted resources or guarantee a discount for paid events. Just like with certificates, NFT tickets can reduce fraud, false identities, duplication or expensive reselling.

Like this, the NFTs have more than one use case, making sure that loyal participants get rewarded and stay encouraged during their web3 learning-journey. Therefore, the smart contract has to check for the respective NFT when requesting a ticket or a discount.

In this case, we decided to use "Lit Protocol" (a decentralized access control protocol) to whitelist the NFT holders for exclusive resources. We deposited the contract address at Lit, which allows users with at least one Token generated by this specific contract to access specific content. For this test-DApp, the masterclass-NFT owners will be able to see a resource on google drive.

### A simple walkthrough

1. After attending a masterclass, the participants can go on the DApp website and connect their browser wallet (Meta Mask).
2. The provided address is checked (participants’ addresses are whitelisted), then a message is displayed if they are eligible for the NFT.
3. If so, it appears a “minting” button, which triggers the creation of the NFT. The user will have to sign a transaction a pay the gas fee for the minting.
4. The new NFT is transferred to the connected wallet. Users will see a success message and can watch their (test) NFT on Opensea. The address is no longer whitelisted.
5. Then, the new NFT owner can access exclusive resources by clicking the "get access" button. They will be redirected to the Lit Protocol and have to connect their wallet to see restricted content.

### Resources

- _Link to the DApp: [https://github.com/naboeth/MasterclassNFT](https://github.com/naboeth/MasterclassNFT)_ (you will have to switch to the ropsten testnet to connect your wallet and have some ropsten test ether, you can get some here: [https://faucet.ropsten.be/](https://faucet.ropsten.be/) or [https://moonborrow.com/](https://moonborrow.com/))
- _Recorded video using the DApp, in case it doesn’t work for you: [https://www.loom.com/share](https://www.loom.com/share)_
- _Contract deployed on the ropsten testnet: [https://ropsten.etherscan.io/](https://ropsten.etherscan.io/)_
- Read more about “The Phoenix guild”: [https://twitter.com/PhoenixGuildHQ](https://twitter.com/PhoenixGuildHQ)

### Future implementations

There are many things in the process that could be added or improved later.

- Our original idea was to implement dynamic NFTs (sort of “upgradeable” NFTs using Chainlink Keepers) to show the participation in TPG masterclasses & bootcamps, so every time a masterclass was attended, the NFT picture would evolve, for example in form of a rising phoenix. Because of the difficulty level, we didn’t realize this (yet).

- The NFT-minting could be extended beyond the masterclasses, for example for other events, grant winners or contributors / donors. Every group would get it’s own design. Of course, the associated rewards could also be expanded, also outside the Phoenix guild community.

- There could be more implemented more wallet providers next to Meta Mask, some users might use other providers.

- Due to the nature of a certification on the blockchain, the NFTs are non-transferrable. However, there are situations, where users would transfer to another of their addresses (for ex. because they want to accumulate their NFTs in one wallet or their are security risks for a wallet, one day the current address format could become vulnerable). In this case, the must be a mechanism to verify the sender and the receiver address of the NFT have the same owner. However, such a backdoor can be a security risk.

- In the current implementation, the address of one masterclass instructor submits the eligible addresses in the contract. Instead, to reduce the degree of centralization, we could link a multi-sig of instructors and mentors of the masterclass.

### How to run the DApps locally (as well as the unit tests)

1. Clone the repository
2. _Install hardhat [https://hardhat.org/tutorial](https://hardhat.org/tutorial)_

   ```
   npx hardhat
   ```

3. _Compile and migrate the contracts…_
4. _Open the "index.html" file with live server…_
5. _Running unit tests…_
