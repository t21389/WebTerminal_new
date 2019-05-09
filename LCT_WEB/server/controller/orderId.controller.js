var order = require("../database/classes/order_details");




// callFunOrderId = function (req, resp) {
//     console.log("ordere id controller");
//     var c = new order.Order_details().select();
//     console.log("demo"+c)
//     resp.send(c);
// }

callFunOrderId = function (req, resp) {
    console.log("ordere id controller");
    var c = new order.Order_details().fetch().then(function (res) {
        console.log("demo" + res);
        resp.send(res);
    }).catch(function (err) {
        console.log("order error" + err);
    })
    console.log("@@@@@@@@@@" + JSON.stringify(c));

}
module.exports = {
    callFunOrderId
}