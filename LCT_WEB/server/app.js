var express = require("express");
var bodyParser = require("body-parser");
var route = require("./route/route");
const path = require("path");
const cors = require("cors");
const app = express();
const WebSocket = require("ws");

// routes
const msroute = require("./route/msroute");
//config
const config = require("./config");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: "false"
  })
);

app.get("/", (req, resp) => {
  resp.render("index");
});

app.use("/api", route);
app.use("/ms", msroute);

// set the app to listen on the port
const server = app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`);
});

// Loading socket.io
const io = require("socket.io").listen(server);

// When a client connects, we note it in the console
io.sockets.on("connection",socket => {
  console.log("Browser client is connected with client Id :", socket.id), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  //  function(socket) {
  // console.log("Browser client is connected with client Id :", socket.id);

  const getApiAndEmit = async socket => {
    try {
      const res = "Hello dear Client";
      socket.emit("FromAPI", res);
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  };
  // socket.emit("message", "Hello dear Client");

  // When the server receives a “message” type signal from the client
  socket.on("message", function(message) {
    console.log("Message received from browser : " + message);
    socket.emit("message", "Server sending message to browser");
  });

  socket.on("disconnect", function() {
    console.log("Browser client got disconnected!");
  });
});

// socket for communicating with node server
// const ws = new WebSocket(config.server_socket_add);
// const socketHandlerFromSystem = require("./controller/socketHandlerFromSystem");

// ws.on("open", function open() {
//   console.log("connected to akshay");
//   ws.send(Date.now());
// });

// ws.on("close", function close() {
//   console.log("disconnected from akshay");
// });

// ws.on("message", function incoming(data) {
//   console.log("data :", data);
//   let res = JSON.parse(data);
//   socketHandlerFromSystem.fHandleSocketFromSystem(res.OpCode);
// });

module.exports = app;
