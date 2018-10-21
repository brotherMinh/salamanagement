import { index } from './routes'

let app    = new index()
const port = 3000

app.express.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})