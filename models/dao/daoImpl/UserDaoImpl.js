"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../UserDao.ts"/>
var BaseDaoImpl_1 = require("./BaseDaoImpl");
var QUERY_CHECK_AUTH_LOGIN = "SELECT * FROM USER U WHERE U.USERNAME = ? AND U.PASSWORD = ?;";
var UserDaoImpl = /** @class */ (function (_super) {
    __extends(UserDaoImpl, _super);
    function UserDaoImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserDaoImpl.prototype.getUserByUserName = function (userName, password) {
        var con = this.getConnection("localhost", "root", "root", "sale_management");
        con.connect(function (err) {
            if (err) {
                console.log(err);
            }
        });
        con.query(QUERY_CHECK_AUTH_LOGIN, [userName, password], function (err, result) {
            if (err) {
                console.log(err);
            }
            return result;
        });
        con.end();
    };
    return UserDaoImpl;
}(BaseDaoImpl_1.BaseDaoImpl));
exports.UserDaoImpl = UserDaoImpl;
