import { JsonRpcProvider, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);
const address = '';

const getAccountInfo = async (address) => {
	try {
		const balance = (await provider.getBalance(address)).totalBalance / 1000000000;
		return { address: address, balance: balance };
	} catch (error) {
		console.log(error.message);
	}
};

console.log(await getAccountInfo(address));
