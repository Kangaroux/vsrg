import * as express from 'express'


const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static('dist'))
app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})