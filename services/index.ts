import { UserLogicImpl } from "../models/logic/logicImpl/UserLogicImpl";
import { User } from "../models/entities/User";
const GoogleStrategy = require('passport-google-oauth20');
const passport = require("passport");
const keys = require("../config/Key");

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  let userLogic = new UserLogicImpl();
  const existUser = userLogic.checkExistedGoogle(id);
  if(existUser){
    let user = userLogic.getUserByGoogle(id);
    done(null, user);
  }

})

passport.use(
  new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
    let userLogic = new UserLogicImpl();
    const existUser = await userLogic.checkExistedGoogle(profile.id);
    if (existUser) {
      done(null, existUser);
    } else {
      let user = await new User(null, null, profile.id, null, null, null, profile.displayName, profile.birthday, profile.phoneNumber, profile.email);
      console.log(user);
      done(null, user);
    }
  })
);