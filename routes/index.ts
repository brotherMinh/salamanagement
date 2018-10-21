import { UserLogicImpl } from "../models/logic/logicImpl/UserLogicImpl";
import * as express from "express";



export class index {
  public express;
  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });
    router.post("/auth/login", (req, res) => {
      console.log(req);
      const userName = req.body.userName;
      const password = req.body.password;
      let userLogic = new UserLogicImpl();
      if (userLogic.checkExistedUser(userName, password)) {
        res.send("dang nhap thanh cong");
      } else {
        res.send("dang nhap that bai");
      }
    });
    this.express.use("/", router);
  }
}

// export default new ind;

// let obj = new index();
// console.log(obj.express);

