"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../UserDao.ts"/>
const BaseDaoImpl_1 = require("./BaseDaoImpl");
var jssha = require('js-sha512');
const QUERY_GET_SALT = `SELECT SALT FROM USER U WHERE U.USERNAME = ?;`;
const QUERY_GET_USER_BY_USERNAME = `SELECT * FROM USER U WHERE U.USERNAME = ? AND U.PASSWORD = ?;`;
const QUERY_GET_USER_BY_GOOGLEID = `SELECT * FROM USER U WHERE U.ID_GOOGLE = ?;`;
class UserDaoImpl extends BaseDaoImpl_1.BaseDaoImpl {
    getUserByUserName(userName, password) {
        var salt = '';
        const con = this.getConnection();
        con.connect(err => {
            if (err) {
                console.log(err);
            }
        });
        //get salt
        con.query(QUERY_GET_SALT, [userName], (err, result) => {
            if (err) {
                console.log(err);
            }
            salt = result;
        });
        //check user
        con.query(QUERY_GET_USER_BY_USERNAME, [userName, jssha.sha512.array(password + salt)], (err, result) => {
            if (err) {
                console.log(err);
            }
            return result;
        });
        con.end();
    }
    getUserByGoogleId(googleId) {
        const con = this.getConnection();
        con.connect(err => {
            if (err) {
                console.log(err);
            }
        });
        con.query(QUERY_GET_USER_BY_GOOGLEID, [googleId], (err, result) => {
            if (err) {
                console.log(err);
            }
            return result;
        });
        con.end();
    }
}
exports.UserDaoImpl = UserDaoImpl;
//# sourceMappingURL=UserDaoImpl.js.map