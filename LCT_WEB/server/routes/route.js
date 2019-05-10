var express = require('express');
var router = express.Router();
var InterfaceController = require("../controller/utility/interface.controller");
var OrderController = require("../controller/utility/orderId.controller");

router.get("/getInterfaceData", function (req, res) {
        let interfaces = InterfaceController.fGetNetworkInterface();
        console.log("***************", interfaces);
        res.json({
                interfaces: interfaces
        });
});


router.get("/getOrderIdData", function (req, resp) {
        let response = OrderController.fGetOrderId();
        res.json(response);
})


module.exports = router;