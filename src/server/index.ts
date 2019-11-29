import * as express from 'express'

const app = express()
const port = process.env.PORT || 3000


app.get('/', (_: express.Request, resp: express.Response) => {
    resp.send('Hello')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})