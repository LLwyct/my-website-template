const {Op} = require('sequelize')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'outsider',
        username: process.env.DB_USERNAME || 'outsider',
        password: process.env.DB_PASSWORD || 'outsider',
        options: {
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.DB_HOST || 'localhost',
            storage: './outsider.sqlite',
            operatorsAliases: {
                $and: Op.and,
                $or: Op.or,
                $eq: Op.eq,
                $gt: Op.gt,
                $lt: Op.lt,
                $lte: Op.lte,
                $like: Op.like
            }
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}