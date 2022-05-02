const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");


describe("GuessTheNumber", function () {
  it("Should return the new greeting once it's changed", async function () {
    const provider = waffle.provider
    const Contract = await ethers.getContractFactory("GuessTheNumberChallenge");
    const contract = await Contract.deploy({ value: ethers.utils.parseEther('1')});
    await contract.deployed();

    let bal = await provider.getBalance(contract.address)
    console.log(bal.toString())

    await contract.guess('42', { value: ethers.utils.parseEther('1') })

    expect(await contract.isComplete()).to.equal(true)

   
  });
});
