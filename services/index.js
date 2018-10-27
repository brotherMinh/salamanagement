"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserLogicImpl_1 = require("../models/logic/logicImpl/UserLogicImpl");
const User_1 = require("../models/entities/User");
const GoogleStrategy = require('passport-google-oauth20');
const passport = require("passport");
const keys = require("../config/Key");
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    let userLogic = new UserLogicImpl_1.UserLogicImpl();
    const existUser = userLogic.checkExistedGoogle(id);
    if (existUser) {
        let user = userLogic.getUserByGoogle(id);
        done(null, user);
    }
});
passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
}, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
    let userLogic = new UserLogicImpl_1.UserLogicImpl();
    const existUser = yield userLogic.checkExistedGoogle(profile.id);
    if (existUser) {
        done(null, existUser);
    }
    else {
        let user = yield new User_1.User(null, null, profile.id, null, null, null, profile.displayName, profile.birthday, profile.phoneNumber, profile.email);
        console.log(user);
        done(null, user);
    }
})));
//# sourceMappingURL=index.js.map