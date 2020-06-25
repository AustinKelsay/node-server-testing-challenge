const knex = require("knex");
require('dotenv').config();

const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);