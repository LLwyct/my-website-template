// 从db中拿出名为User的sequelize.Modle类
const {User} = require('../models')

module.exports = {
    async register(req, res) {
        console.log('register controller')
        try {
            // 创建用户行信息且成功
            const user = await User.create(req.body)
            res.send(user.toJSON())
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
            }
            const isPasswordVaild = password === user.password
            if (!isPasswordVaild) {
                res.status(403).send({
                    error: '用户名或密码错误'
                })
            }
            res.send({
                user: user.toJSON()
            })
        } catch (error) {
            res.status(500).send({
                error: '无效的登录信息'
            })
        }
    }
}