const bodyParser = require('body-parser')
// 回自动找目录下的index.js文件
const {sequelize} = require('./models')
const express = require('express')
const morgan = require('morgan')
const config = require('./config/config')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
    })