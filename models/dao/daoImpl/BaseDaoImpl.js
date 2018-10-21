"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../BaseDao.ts"/>
var mysql_1 = require("mysql");
var BaseDaoImpl = /** @class */ (function () {
    function BaseDaoImpl() {
    }
    BaseDaoImpl.prototype.getConnection = function (host, user, password, database) {
        try {
            var connection_1 = mysql_1.default.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            });
            connection_1.connect(function (err) {
                if (err) {
                    return null;
                }
                else {
                    return connection_1;
                }
            });
        }
        catch (error) {
            throw error;
        }
    };
    BaseDaoImpl.prototype.closeConnection = function (connection) {
        try {
            if (connection != null) {
                connection.end();
            }
        }
        catch (error) {
            throw error;
        }
    };
    return BaseDaoImpl;
}());
exports.BaseDaoImpl = BaseDaoImpl;
