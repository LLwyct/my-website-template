const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('hello')
    })

    app.post('/register', AuthenticationController.register)
}