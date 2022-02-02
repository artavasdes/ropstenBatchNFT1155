async function main() {
    const Jamal = await ethers.getContractFactory("Jamal")

    // Start deployment, returning a promise that resolves to a contract object
    const jamal = await Jamal.deploy()
    await jamal.deployed()
    console.log("Contract deployed to address:", jamal.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })