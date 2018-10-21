"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserLogicImpl_1 = require("../models/logic/logicImpl/UserLogicImpl");
var express = require("express");
var index = /** @class */ (function () {
    function index() {
        this.express = express();
        this.mountRoutes();
    }
    index.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get("/", function (req, res) {
            res.json({
                message: "Hello World!"
            });
        });
        router.post("/auth/login", function (req, res) {
            console.log(req);
            var userName = req.body.userName;
            var password = req.body.password;
            var userLogic = new UserLogicImpl_1.UserLogicImpl();
            if (userLogic.checkExistedUser(userName, password)) {
                res.send("dang nhap thanh cong");
            }
            else {
                res.send("dang nhap that bai");
            }
        });
        this.express.use("/", router);
    };
    return index;
}());
exports.index = index;
// export default new ind;
// let obj = new index();
// console.log(obj.express);
