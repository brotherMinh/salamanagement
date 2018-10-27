///<reference path="../entities/User.ts"/>
interface UserLogic {
  checkExistedUser(userName: String, password: String): boolean;
  checkExistedGoogle(googleId: String): boolean;
  getUserByGoogle(googleId: String);
}