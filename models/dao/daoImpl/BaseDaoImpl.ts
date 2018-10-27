///<reference path="../BaseDao.ts"/>
import * as mysql from "mysql";
export class BaseDaoImpl implements BaseDao {
    getConnection() {
        try {
            const connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "root",
                database: "sale_management"
            });
            return connection;
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
