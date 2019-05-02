var express = require("express");
var bodyParser = require("body-parser");

var route = require('./route/route');
const path = require('path');
const port = 1234;
const app = express();

//app.set('view engine', 'ejs');
app.get('/', (req, resp) => {
    resp.render('index');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: "false"
}));

//app.use(express.static(path.join(__dirname, "views")));
app.use('/api', route);

app.listen(port, (req, resp) => {
    console.log(' server is running on port ' + port);
});

module.exports = app;