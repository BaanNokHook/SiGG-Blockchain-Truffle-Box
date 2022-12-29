const CONTRACT_A = artifacts.require("A");
const CONTRACT_B = artifacts.require("B");
const CONTRACT_C = artifacts.require("C");
const CONTRACT_D = artifacts.require("D");


module.exports = async function(deployer) {
    // deploy contract A,B,C
    await deployer.deploy(CONTRACT_A);
    await deployer.deploy(CONTRACT_B);
    await deployer.deploy(CONTRACT_C);
    await deployer.deploy(CONTRACT_D);
    // access information about your deployed contract instance
    const INSTANCE_A = await CONTRACT_A.deployed();
    const INSTANCE_B = await CONTRACT_B.deployed();
    const INSTANCE_C = await CONTRACT_C.deployed();
    const INSTANCE_D = await CONTRACT_D.deployed();
    // contract address
    console.log("contract A address:", INSTANCE_A.address);
    console.log("contract B address:", INSTANCE_B.address);
    console.log("contract C address:", INSTANCE_C.address);
    console.log("contract D address:", INSTANCE_D.address);

    // delagate call setVars
    // A <-call-> B contract <-call-> C contract <-call-> D contract
    // contract A delegate_call setVars from contract D via B, C
    await INSTANCE_A.setVars(
        INSTANCE_B.address, 
        INSTANCE_C.address, 
        INSTANCE_D.address,
        15
    );
    // contract B delegate_call setVars from contract D via C
    await INSTANCE_B.setVars(
        INSTANCE_C.address, 
        INSTANCE_D.address,
        10
    );
    // contract C delegate_call setVars from contract D 
    await INSTANCE_C.setVars(
        INSTANCE_D.address,
        5
    );
    // contract D
    await INSTANCE_D.setVars(2);

    // output check
    console.log(
        "contract A:",
        (await INSTANCE_A.num()).toString(),
        await INSTANCE_A.sender()
    );
    console.log(
        "contract B:",
        (await INSTANCE_B.num()).toString(),
        await INSTANCE_B.sender()
    );
    console.log(
        "contract C:",
        (await INSTANCE_C.num()).toString(),
        await INSTANCE_C.sender()
    );
    console.log(
        "contract D:",
        (await INSTANCE_D.num()).toString(),
        await INSTANCE_D.sender()
    );
};