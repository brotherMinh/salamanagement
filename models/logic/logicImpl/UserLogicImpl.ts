///<reference path="../UserLogic.ts"/>
///<reference path="../../dao/daoImpl/UserDaoImpl.ts"/>
import { UserDaoImpl } from "../../dao/daoImpl/UserDaoImpl";

export class UserLogicImpl implements UserLogic{
  checkExistedUser(userName: String, password: String): boolean {
    let userDao = new UserDaoImpl();
    let user = userDao.getUserByUserName(userName, password);
    if (user === null){
      return false;
    }
    return true;
  }
}