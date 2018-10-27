"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../BaseDao.ts"/>
const mysql = require("mysql");
class BaseDaoImpl {
    getConnection() {
        try {
            const connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "root",
                database: "sale_management"
            });
            return connection;
        }
        catch (error) {
            throw error;
        }
    }
    closeConnection(connection) {
        try {
            if (connection != null) {
                connection.end();
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.BaseDaoImpl = BaseDaoImpl;
//# sourceMappingURL=BaseDaoImpl.js.map