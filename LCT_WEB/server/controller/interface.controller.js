var a = require("../netinterface");

exports.callfunInterface = function(req, resp) {
  console.log("444444444444");
  var c = a.fn();
  // console.log("function calling", JSON.stringify(c));
  resp.send(c);
};
