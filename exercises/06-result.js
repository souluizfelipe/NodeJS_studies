const getFlag = require("./06-flags");

console.log(`Oi, ${getFlag('--name')}, ${getFlag('--greeting')}`);