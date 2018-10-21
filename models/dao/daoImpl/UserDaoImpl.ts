///<reference path="../UserDao.ts"/>
import {BaseDaoImpl} from "./BaseDaoImpl";

const QUERY_CHECK_AUTH_LOGIN = `SELECT * FROM USER U WHERE U.USERNAME = ? AND U.PASSWORD = ?;`;
export class UserDaoImpl extends BaseDaoImpl implements UserDao {
    getUserByUserName(userName: String, password: String): User {
        const con = this.getConnection("localhost", "root", "root", "sale_management");
        console.log(con);
        // con.query(QUERY_CHECK_AUTH_LOGIN, [userName, password], (err, result) => {
        //     if (err) {
        //         // xu ly loi o day
        //         console.log(err);
        //     } else {
        //         if (result.length == 0) {
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     }
        //     return result;
        // });
        return null;
    }
}