require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle foot dance recipe stick method coral light army genius'; 
let testAccounts = [
"0x268e633954fc43a422c5ba807f552e9358b60fadac6d4e9ab5824f10d0b09a30",
"0x09062b0ae17332ca0be0019c26400fba49f06df3bb6ff153e5ad399e26599afe",
"0xa359b63a4e9ca657ae922a8121131a1cf446955cfe885a675fc285c025af5885",
"0xcfefb7250481af39b6a3390cf0d3631271a3407eb86a92d66bbb9c54e8ac94ad",
"0xfccff696bf3aa1ee9a59209854aada0917a58af315c1d9e621d8112e2097d215",
"0xd4641ca6bd3e4da18a9daf644fc07bef65e189d960925bf02a28a1077eed4523",
"0x33208285507b41a2cd782e6e9ea4d194b4412c5c22ed8c300177877c8d79d393",
"0x8bcac950008b24c956f614defa9d9ce9509dc2e3b35512cedbc5e936dfbfe474",
"0xfaf8801ae89ba366997460131e4dc2ba6577505950e0cafe977fe5343f5d7e6d",
"0x5b904f4bcacc0770f61f83fb731e80c39482849e224b1c7f1383cdd76d4cfdda"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

