const WebSocket = require("ws");
const socketHandlerFromSystem = require("./socketHandlerFromSystem");
var ws;
initializeWebSocketWithSystem = () => {
  ws = new WebSocket(require("../config").server_socket_add);

  ws.on("open", function open() {
    console.log("connected to akshay");
    ws.send("Hello Akshay ");
  });

  ws.on("close", function close() {
    console.log("disconnected from akshay");
  });

  ws.on("message", function incoming(data) {
    console.log("Socket Message from Akshay :", data);
    let res = JSON.parse(data);
    socketHandlerFromSystem.fHandleSocketFromSystem(res.OpCode);
  });
  return ws;
};

closeWebSocketWithSystem = () => {
  if (ws) ws.close();
  ws = undefined;
};

module.exports = {
  ws,
  initializeWebSocketWithSystem,
  closeWebSocketWithSystem
};
