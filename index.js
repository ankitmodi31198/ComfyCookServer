require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const db = require('./models')
const handle = require('./handlers')
const routes = require('./routes')

const app = express()
// const port = process.env.PORT
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req, res, next) => {
    res.json({hello: 'World'})
})

app.use('/seed', routes.seed)
app.use('/auth', routes.auth)
app.use('/food', routes.food)
app.use('/user', routes.user)

app.use(handle.notFound)
app.use(handle.errors)

app.listen(port, console.log(`Server started on port ${port}...`))