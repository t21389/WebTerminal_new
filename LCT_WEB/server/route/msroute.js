const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config");
const {
  ws,
  initializeWebSocketWithSystem
} = require("../controller/systemWebSocket");

router.post("/getNetworkList", async function(req, res) {
  config.fSetupServerSocket(req.body.ip);
  if (!ws) initializeWebSocketWithSystem();

  let reqUrl = config.server_http_add + "/ne_list";

  res.json({ message: "Request send to system for Initial Message " });

  let response = await axios.post(reqUrl, {
    OpCode: "1234"
  });

  console.log("Http Response", response.data);
});

module.exports = router;
