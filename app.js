"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var app = new routes_1.index();
var port = 3000;
app.express.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("server is listening on " + port);
});
