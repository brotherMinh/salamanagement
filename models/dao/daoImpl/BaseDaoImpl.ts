///<reference path="../BaseDao.ts"/>
import mysql from "mysql";
export class BaseDaoImpl implements BaseDao {
    getConnection(host, user, password, database) {
        try {
            const connection = mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            });
            connection.connect(err => {
                if (err) {
                    return null;
                } else {
                    return connection;
                }
            });
        } catch (error) {
            throw error;
        }    
    }
    closeConnection(connection) {
        try {
            if (connection != null){
                connection.end();
            }
        } catch (error) {
            throw error;
        }
    }
}
