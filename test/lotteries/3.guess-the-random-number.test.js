const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

describe("GuessTheRandomNumber", function () {
  it("drain wallet and say complete", async function () {
    const provider = waffle.provider
    const Contract = await ethers.getContractFactory("GuessTheRandomNumberChallenge");
    const contract = await Contract.deploy({ value: ethers.utils.parseEther('1')});
    await contract.deployed();

    // gets the storage at slot 0
    const slot = await contract.provider.getStorageAt(contract.address,0)
    const num = Number(slot)



    await contract.guess(num, { value: ethers.utils.parseEther('1')})

    expect(await contract.isComplete()).to.eq(true)

   
  });
});
