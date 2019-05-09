var express = require('express');
var router = express.Router();

var networkinterface = require('../controller/interface.controller').callfunInterface
router.get("/getInterfaceData", function (req, resp) {
        console.log("%%%");
        networkinterface(req, resp);
})

var orderId = require('../controller/orderId.controller').callFunOrderId;
router.get("/getOrderIdData", function (req, resp) {
       console.log("%%%2");
        orderId(req, resp);
       
})


module.exports = router;