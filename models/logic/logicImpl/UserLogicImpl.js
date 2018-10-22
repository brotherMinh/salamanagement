"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../UserLogic.ts"/>
///<reference path="../../dao/daoImpl/UserDaoImpl.ts"/>
var UserDaoImpl_1 = require("../../dao/daoImpl/UserDaoImpl");
var UserLogicImpl = /** @class */ (function () {
    function UserLogicImpl() {
    }
    UserLogicImpl.prototype.checkExistedUser = function (userName, password) {
        var userDao = new UserDaoImpl_1.UserDaoImpl();
        var user = userDao.getUserByUserName(userName, password);
        if (user === null || user === undefined) {
            return false;
        }
        return true;
    };
    return UserLogicImpl;
}());
exports.UserLogicImpl = UserLogicImpl;
