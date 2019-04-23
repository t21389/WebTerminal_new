const ni = require('network-interfaces');
const options = {
    internal: false, // boolean: only acknowledge internal or external addresses (undefined: both)
    ipVersion: 4     // integer (4 or 6): only acknowledge addresses of this IP address family (undefined: both)
  };
const interfaceNames = ni.getInterfaces(options);
console.log(interfaceNames);

var network=require('os').networkInterfaces();
console.log(network);