// 将所有方法Promise
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
    const SALT_FACTOR = 10
    if(!user.changed('password')) {
        return;
    }
    return bcrypt.genSaltAsync(SALT_FACTOR)
    // 文档里根本就没有Async这个方法，我不知道这种文档意义何在？
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },
    {
        hooks: {
            // 还有一个beforeCreate,但是当创建新用户时，create和Save都会被使用，会哈希两次
            beforeUpdate: hashPassword,
            beforeSave: hashPassword,
            // beforeCreate: hashPassword
        }
    })
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }
    return User
}
