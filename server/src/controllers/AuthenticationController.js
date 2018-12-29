// 从db中拿出名为User的sequelize.Modle类
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 7 * 24 * 60 * 60;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
module.exports = {
    async register(req, res) {
        console.log('register controller')
        try {
            // 创建用户行信息且成功
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (error) {
            // 创建用户行信息失败：email已存在
            res.status(400).send({
                error: '该邮箱已被使用'
            })
        }
    },
    async login(req, res) {
        console.log('login controller 19', req.body)
        try {
            // 查询用户行信息且成功
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                res.status(403).send({
                    error: '用户名尚未注册'
                })
                return;
            }
            const isPasswordVaild = await user.comparePassword(password)
            if (!isPasswordVaild) {
                res.status(403).send({
                    error: '用户名或密码错误'
                })
            } else {
                const userJson = user.toJSON()
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson)
                })
            } 
        } catch (error) {
            res.status(500).send({
                error: '无效的登录信息'
            })
        }
    }
}