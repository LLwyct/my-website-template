const joi = require('joi')

module.exports = {
    register(req, res, next) {
        // 定义一个验证格式
        const schema = {
            email: joi.string().email(),
            password: joi.string().regex(
                new RegExp('^[a-zA-z0-9]{8,32}$')
            )
        }
        // 检查
        const {
            error,
            value
        } = joi.validate(req.body, schema)

        // 如果报错
        if (error) {
            switch (error.details[0].context.key) {
                // 邮箱错误的报错
                case 'email':
                    res.status(400).send({
                        error: '请验证邮箱格式'
                    })
                    break
                // 密码错误
                case 'password':
                    res.status(400).send({
                        error: '密码必须由8至32位的a-z、A-Z、0-9组成'
                    })
                    break
                // 未知错误
                default:
                    res.status(400).send({
                        error: '服务器故障，修复中'
                    })
            }
        }
        else {
            next()
        }
    }
}