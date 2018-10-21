// @ts-ignore
import {index} from './routes';
import * as bodyParser from "body-parser";

let app = new index();
const port = 3000;
app.express.use(bodyParser.urlencoded({ extended: false }));
app.express.use(bodyParser.json());

app.express.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})