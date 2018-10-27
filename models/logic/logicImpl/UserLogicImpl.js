"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../UserLogic.ts"/>
///<reference path="../../dao/daoImpl/UserDaoImpl.ts"/>
const UserDaoImpl_1 = require("../../dao/daoImpl/UserDaoImpl");
class UserLogicImpl {
    checkExistedUser(userName, password) {
        let userDao = new UserDaoImpl_1.UserDaoImpl();
        let user = userDao.getUserByUserName(userName, password);
        if (user === null) {
            return false;
        }
        return true;
    }
    checkExistedGoogle(googleId) {
        return true;
    }
    getUserByGoogle(googleId) {
        return null;
    }
}
exports.UserLogicImpl = UserLogicImpl;
//# sourceMappingURL=UserLogicImpl.js.map