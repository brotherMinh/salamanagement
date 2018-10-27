"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserLogicImpl_1 = require("../models/logic/logicImpl/UserLogicImpl");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
class index {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        // this.express.use(passport.initialize())
        // this.express.use(passport.session())
        // require('./config/passport')(passport);
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'abc!'
            });
        });
        router.post('/auth/login', (req, res) => {
            const userName = req.body.userName;
            const password = req.body.password;
            let userLogic = new UserLogicImpl_1.UserLogicImpl();
            if (userLogic.checkExistedUser(userName, password)) {
                res.send('dang nhap thanh cong');
            }
            else {
                res.send('dang nhap that bai');
            }
        });
        router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'], }));
        router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.redirect('/survey');
        });
        this.express.use('/', router);
    }
}
exports.index = index;
//# sourceMappingURL=index.js.map