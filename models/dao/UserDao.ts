///<reference path="../entities/User.ts"/>
interface UserDao {
    getUserByUserName(userName: String, password: String): User;
}