let port = process.env.PORT | 1234;
let server_socket_add = "ws://192.168.115.21:8801";
let server_http_add = "http://192.168.115.21:8802";

module.exports = {
  port,
  server_socket_add,
  server_http_add,
  fSetupServerSocket: add => {
    this.server_socket_add = "ws://" + add + ":8801";
    this.server_http_add = "http://" + add + ":8802";
  }
};
