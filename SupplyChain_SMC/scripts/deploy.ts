import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
   await Config.initConfig();
   const network = hardhatArguments.network ?? 'dev';
   const [deployer] = await ethers.getSigners();
   console.log('deploy from address: ', deployer.address);

   // const AgiToken = await ethers.getContractFactory("AgriToken");
   // const agriToken = await AgiToken.deploy();
   // console.log("AgriToken address: ", agriToken.address);
   // Config.setConfig(network + '.AgriToken', agriToken.address);

   // const Ico = await ethers.getContractFactory("AGTCrowdSale");
   // const ico = await Ico.deploy(10000, '0xc53595721Ea7AeB18Ec09224a68A7aaCc75187eF', '0x5ff752Da7c8224e3B8AEEFFAd63473D74DE066B2')
   // console.log("ICO address: ", ico.address);
   // Config.setConfig(network + '.Ico', ico.address);

   const SupplyChain = await ethers.getContractFactory("SupplyChain");
   const supplyChain = await SupplyChain.deploy('0xc53595721Ea7AeB18Ec09224a68A7aaCc75187eF', '0x5ff752Da7c8224e3B8AEEFFAd63473D74DE066B2');
   console.log("Supplychain address: ", supplyChain.address);
   Config.setConfig(network + '.SupplyChain', supplyChain.address);

   await Config.updateConfig();
}

main()
   .then(() => process.exit(0))
   .catch(error => {
      console.log(error);
      process.exit(1)
   })