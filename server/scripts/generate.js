const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = toHex(secp.utils.randomPrivateKey());

const publicKey = toHex(secp.getPublicKey(privateKey));

const address = publicKey.slice(-20);

console.log("Private Key: ", privateKey);
console.log("Public Key: ", publicKey);
console.log("Address: ", address);
