var express = require("express");
var bodyParser = require("body-parser");
var route = require('./route/route');
const path = require('path');
const port = 1234;
const port1 = 4001;
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const app = express();
const index = require("./route/index");


// const date = new Date();
// let hours = date.getHours();


function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + " Time: " + hour + ":" + min + ":" + sec;

}

app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", socket => {
    console.log("New client connected"), setInterval(
        () => getApiAndEmit(socket),
        10000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
    try {
        var t = getDateTime();
        console.log("before" + t);
        socket.emit("FromAPI", t);
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};
server.listen(port1, () => console.log(`Listening on port ${port1}`));


//app.set('view engine', 'ejs');
app.get('/', (req, resp) => {
    resp.render('index');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: "false"
}));


app.use('/api', route);
app.listen(port, () => {
    console.log(' server is running on port ' + port);
});

module.exports = app;