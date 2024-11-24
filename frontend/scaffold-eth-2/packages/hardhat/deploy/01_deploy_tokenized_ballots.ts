import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { toHex } from "viem";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const blockNumber = await ethers.provider.getBlockNumber();

  const targetBlockNumber = blockNumber > 0 ? blockNumber - 1 : 0;

  await deploy("TokenizedBallot", {
    from: deployer,
    args: [
      [toHex("Dogs", { size: 32 }), toHex("Cats", { size: 32 }), toHex("Capybaras", { size: 32 })],
      "0x85D57140a0dB24D45ee2bB3379e548D1253BFA36",
      targetBlockNumber,
    ],
    log: true,
    autoMine: true,
  });
};

export default deployYourContract;

deployYourContract.tags = ["TokenizedBallot"];
