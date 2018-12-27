const fs =require('fs')
const path = require('path')
const Sequelize = require('Sequelize')
const config = require('../config/config')
let db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options,
)

fs
.readdirSync(__dirname)
.filter((file) => file !== 'index.js')
// 这里不能加{}，即.filter((file) => {file !== 'index.js'})，不知为何
.forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db