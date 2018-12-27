// 从db中拿出名为User的sequelize.Modle类
const {User} = require('../models')

module.exports = {
    async register(req, res) {
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
    }
}