///<reference path="../UserDao.ts"/>
import { BaseDaoImpl } from "./BaseDaoImpl";
var jssha = require('js-sha512');

const QUERY_GET_SALT = `SELECT SALT FROM USER U WHERE U.USERNAME = ?;`;
const QUERY_GET_USER_BY_USERNAME = `SELECT * FROM USER U WHERE U.USERNAME = ? AND U.PASSWORD = ?;`;
const QUERY_GET_USER_BY_GOOGLEID = `SELECT * FROM USER U WHERE U.ID_GOOGLE = ?;`;

export class UserDaoImpl extends BaseDaoImpl implements UserDao {
  getUserByUserName(userName: String, password: String) {
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
    con.query(QUERY_GET_USER_BY_USERNAME, [userName, jssha.sha512.array(password+salt)], (err, result) => {
        if (err) {
            console.log(err);
        }
        return result;
    });
    con.end()
  }

  getUserByGoogleId(googleId: String){
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
    con.end()
  }
}