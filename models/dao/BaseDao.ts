interface BaseDao {
  getConnection(host: String, user: String, password: String, database: String);
  closeConnection(conn): void;
}
