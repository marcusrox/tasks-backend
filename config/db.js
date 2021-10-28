const config = require('../knexfile.js')
const knex = require('knex')(config)
//const knex = require("knex")(config['production']);

//knex.migrate.latest([config])
module.exports = knex