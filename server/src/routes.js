const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('hello')
    })

    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
}