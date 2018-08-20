const create = require('./create');
const query = require('./query')
const update = require('./update')

const Knownledge = {
    Create: create,
    Query: query,
    Update: update
}

module.exports = Knownledge