var sio = require("socket.io");
var io = null;

exports.getInstance = function() {
  return io;
};

exports.initialize = function(server) {
  return (io = sio(server));
};
