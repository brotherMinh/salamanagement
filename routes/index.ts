import { UserLogicImpl } from '../models/logic/logicImpl/UserLogicImpl'
import * as express      from 'express'
import * as bodyParser   from 'body-parser'

export class index {
  public express

  constructor() {
    this.express = express()
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(bodyParser.json())
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'abc!'
      })
    })
    router.post('/auth/login', (req, res) => {
      const userName = req.body.userName
      const password = req.body.password
      let userLogic  = new UserLogicImpl()
      if (userLogic.checkExistedUser(userName, password)) {
        res.send('dang nhap thanh cong')
      } else {
        res.send('dang nhap that bai')
      }
    })
    this.express.use('/', router)
  }
}