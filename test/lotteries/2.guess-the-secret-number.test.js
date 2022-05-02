const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

function bruteForceHash(range, targetHash) {
  for (let i = 0; i < range; i++) {
    const hash = ethers.utils.keccak256(i)
    if (targetHash === hash) return i
  }


}




describe("GuessTheSecretNumber", function () {
  it("drain wallet and say complete", async function () {
    const provider = waffle.provider
    const Contract = await ethers.getContractFactory("GuessTheSecretNumberChallenge");
    const contract = await Contract.deploy({ value: ethers.utils.parseEther('1')});
    await contract.deployed();

    const num = bruteForceHash(2**8, '0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365')

    await contract.guess(num, { value: ethers.utils.parseEther('1')})

    expect(await contract.isComplete()).to.eq(true)

   
  });
});
