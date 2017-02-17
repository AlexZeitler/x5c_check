'use strict';

const fs = require('fs');
const NodeRSA = require('node-rsa');
const path = require('path');
const x5cRaw = fs.readFileSync(path.join(__dirname, 'x5c.crt'));
const x5c = Buffer.from(x5cRaw, 'base64', Buffer.byteLength(x5cRaw, 'base64'));
const key = new NodeRSA(x5c, 'public');
const exportedKey = key.exportKey('public');

console.log(exportedKey);