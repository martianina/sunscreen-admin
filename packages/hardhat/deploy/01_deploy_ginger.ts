import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployGinger: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const result = await deploy("Ginger", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const contract = await ethers.getContractAt("Ginger", result.address);
  const currentOwner = await contract.owner();

  const TARGET_OWNER = "0x1a29B2f286Ce79AdAD09D77b370C043E840e647B";

  if (currentOwner.toLowerCase() !== TARGET_OWNER.toLowerCase()) {
    const tx = await contract.transferOwnership(TARGET_OWNER);
    await tx.wait();
    console.log(`Ownership transferred to ${TARGET_OWNER}`);
  } else {
    console.log("Already owned by target wallet.");
  }
};

export default deployGinger;
deployGinger.tags = ["Ginger"];
