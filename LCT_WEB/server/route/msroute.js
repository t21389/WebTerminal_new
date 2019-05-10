const express = require("express");
const router = express.Router();
const axios = require("axios");
const server_http_add = require("../config").server_httpp_add;

router.get("/getNetworkList", async function(req, res) {
  let reqUrl = "http://192.168.115.21:8802/ne_list";
  console.log("User requested at ", reqUrl);
  let response = await axios.post(reqUrl, {
    OpCode: "1234"
  });

  console.log("Http Response", response.data);
});
module.exports = router;
