import { abi as MyTokenAbi } from "../app/assets/MyToken.json";
import { Abi } from "viem";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  11155111: {
    MyToken: {
      address: "", // Add the address of the deployed contract
      abi: MyTokenAbi as Abi,
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
