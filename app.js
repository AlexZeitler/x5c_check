'use strict';

const NodeRSA = require('node-rsa');
const path = require('path');
const x509 = require('x509');

const parsedKey = x509.parseCert(path.join(__dirname, 'x5c.crt'));
const key = new NodeRSA();

key.importKey({
    n: new Buffer(parsedKey.publicKey.n, 'hex'),
    e: parseInt(parsedKey.publicKey.e, 10)
}, 'components-public');

const exportedKey = key.exportKey('public');

console.log(exportedKey);
