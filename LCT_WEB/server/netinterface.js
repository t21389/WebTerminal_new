var fn = function () {
  function networkInterface() {
    let x = require('os').networkInterfaces();
    console.log("x==", x);
    return x;

  }
  var data = networkInterface();


  var jsonData = JSON.stringify(data);
  var jsonparse = JSON.parse(jsonData);
  var length = Object.keys(data).length
  console.log("Number of keys: ", length);

  var networkinterface = [];

  //console.log("//////",Object.values(data)[0]);
  for (i = 0; i < length; i++) {
    let v = Object.keys(data)[i];
    console.log("interface name " + i, ": ", v);
    for (j = 0; j < jsonparse[v].length; j++) {
      console.log("Address of " + v, ": ", jsonparse[v][j].address);
      console.log("NetMask of " + v, ": ", jsonparse[v][j].netmask);
      networkinterface.push({
        "Interface_name": v,
        "Interface_address": jsonparse[v][j].address,
        "Interface_netmask": jsonparse[v][j].netmask
      });
    }

  }
  console.log("NETWORK", networkinterface);
  return {value: networkinterface};

}
module.exports = {
  fn
}
//fn();s