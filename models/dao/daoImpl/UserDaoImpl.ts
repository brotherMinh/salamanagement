///<reference path="../UserDao.ts"/>
import { BaseDaoImpl } from "./BaseDaoImpl";
var jssha = require('js-sha512');

const QUERY_GET_SALT = `SELECT SALT FROM sale_management.user U WHERE U.USERNAME = ?`;
const QUERY_CHECK_AUTH_LOGIN = `SELECT * FROM USER U WHERE U.USERNAME = ? AND U.PASSWORD = ?;`;

export class UserDaoImpl extends BaseDaoImpl implements UserDao {
  async getUserByUserName(userName: String, password: String) {
    var salt = '';

    const con = this.getConnection("localhost", "root", "root", "sale_management");
    con.connect(err => {
      if (err) {
        console.log(err);
      }
    });

    //get salt
    console.log('userName='+userName); //Debug.
    await con.query(QUERY_GET_SALT, [userName], function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log('result='+JSON.stringify(result)); //Debug.
      console.log('result[0]='+JSON.stringify(result[0])); //Debug.
      console.log('result[0]["SALT"]='+JSON.stringify(result[0]["SALT"])); //Debug.
      salt = result[0]["SALT"];
      console.log('salt='+salt); //Debug.
    });

    //check user
    console.log('salt='+salt); //Debug.
    var hashedPassword = jssha.sha512.array(password + salt).join("");
    console.log('hashedPassword='+hashedPassword); //Debug.
    con.query(QUERY_CHECK_AUTH_LOGIN, [userName, hashedPassword], function (err, result) {
      if (err) {
        console.log(err);
      }
      //Debug.
      console.log(result);
      //
      return result;
    });

    //end connection.
    con.end()
  }
}