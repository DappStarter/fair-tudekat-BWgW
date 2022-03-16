require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot elder rate noble history injury light army giant'; 
let testAccounts = [
"0xe25244cd2698fbac6d4c1e01836cc13245fee5f34694ca186d8041582776954d",
"0x1a5e31c179c3348336548d41ae333cba69951c9f7014b7aa907704235392028f",
"0x68368d087c7498cd84a3ec0a62dfb96111a7cbc8737a310ed6aeb174181935b1",
"0x21a00b23b5b59d21c1afc3c6b22da7598c1770f7ecaf985f7cdc6d127c3fe78b",
"0x78689710210e0d67e2e391797e1d6e1657d94eb4af02d8f7bd28bbf2f3bad26d",
"0x45889345e353c6d3409824741130b17e75f0d48c6f928d9a0ba3a1e59687a5a8",
"0xed668f0770b5555cb3bfae96c1f576f4c760f11a2a42038f1b69f4bc0a5af2d3",
"0x43ff22c944acc9b5ca0e51d92dafaf2ca3f162ba1d1c0e14e7fec0e5987eb88f",
"0xf16a3c33662ef3f706ed402c52099e2e9ce0bfaac5ce00f3d3c2c7cc78863d9c",
"0x9c4f04aacdc8c4e8d145c2aa291e1150c5d8dc7eea7c27f36dced2ff83623866"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

