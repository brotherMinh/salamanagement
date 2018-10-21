"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../BaseDao.ts"/>
var mysql = require("mysql");
var BaseDaoImpl = /** @class */ (function () {
    function BaseDaoImpl() {
    }
    BaseDaoImpl.prototype.getConnection = function (host, user, password, database) {
        try {
            var connection = mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            });
            return connection;
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
