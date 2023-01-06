import express, {Express, Request, Response} from "express"

const dotenv = require('dotenv')

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({msg: 'Hello World'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})