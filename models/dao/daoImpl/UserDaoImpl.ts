///<reference path="../UserDao.ts"/>
import { BaseDaoImpl } from "./BaseDaoImpl";

const QUERY_CHECK_AUTH_LOGIN = `SELECT * FROM USER U WHERE U.USERNAME = ? AND U.PASSWORD = ?;`;

export class UserDaoImpl extends BaseDaoImpl implements UserDao {
  getUserByUserName(userName: String, password: String) {
    const con = this.getConnection("localhost", "root", "root", "sale_management");
    con.connect(err => {
      if (err) {
        console.log(err);
      }
    });
    con.query(QUERY_CHECK_AUTH_LOGIN, [userName, password], (err, result) => {
        if (err) {
            console.log(err);
        }
        return result;
    });
    con.end()
  }
}