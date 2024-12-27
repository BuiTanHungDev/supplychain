import abiCrowdSale from './abis/crowdSale.json';
import abiSupllyChain from './abis/supplyChain.json';
import abiAGTToken from './abis/agtToken.json';
import { ethers } from "ethers";

export const AGT_TOKEN_ADDRESS: string = '0x5ff752Da7c8224e3B8AEEFFAd63473D74DE066B2';
export const CROWDSALE_ADDRESS: string = '0x640b73e2b2300D07F44f3AD437055BFa33850fe8';
export const SUPPLYCHAIN_ADDRESS: string = '0xfDeAA2435aae255E12fEA716d288EeCe608B6831';
export const getAbiAGTToken = () => abiAGTToken;
export const getAbiCrowSale = () => abiCrowdSale;
export const getAbiSupplyChain = () => abiSupllyChain;
export const rpcProvider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_NEXT_PUBLIC_RPC_TESTNET);   