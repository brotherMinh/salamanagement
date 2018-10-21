"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var routes_1 = require("./routes");
var bodyParser = require("body-parser");
var app = new routes_1.index();
var port = 3000;
app.express.use(bodyParser.urlencoded({ extended: false }));
app.express.use(bodyParser.json());
app.express.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("server is listening on " + port);
});
