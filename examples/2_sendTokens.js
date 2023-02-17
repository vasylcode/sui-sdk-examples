import { JsonRpcProvider, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);
const keypair = new Ed25519Keypair();
const signer = new RawSigner(keypair, provider);
const from = '';
const to = '';

console.log('transferTxn', transferTxn);
const getAccountInfo = async (address) => {
	try {
		const transferTxn = await signer.transferObject({
			objectId: '0x5015b016ab570df14c87649eda918e09e5cc61e0',
			gasBudget: 1000,
			recipient: '0xd84058cb73bdeabe123b56632713dcd65e1a6c92',
		});
	} catch (error) {
		console.log(error.message);
	}
};

console.log(await getAccountInfo(address));
