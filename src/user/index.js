const register = require('./register');
const login = require('./login')
const query = require('./query')
const update = require('./update')

const User = {
    Register: register,
    Login: login,
    Query: query,
    Update: update
}

module.exports = User