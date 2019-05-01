var express = require('express');
var router = express.Router();

// console.log("1234545");


var networkinterface = require('../controller/interface.controller').callfunInterface;
// router.get('/getInterfaceData', function (req, resp) {
//     console.log("1234545");
//             callFunc(req,resp).then(function (data) {
//                 console("response =>>>>" + resp)
//             }).catch(function (err) {
//                 console.log(err);
//             });

//         }
// );
// router.get('/getInterfaceData',networkinterface.callfun);
//         module.exports = router;
router.get("/getInterfaceData", function (req, resp) {
        console.log("%%%");
        networkinterface(req, resp);
})
module.exports = router;