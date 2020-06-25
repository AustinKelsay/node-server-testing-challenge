const db = require("../data/dbConfig");

module.exports = {
  get,
  get,
  add,
  remove
};

function get() {
    return db("hobbits");
}

function getById(id) {
    return db('hobbits').where({ id }).first();
}

function add(hobbit) {
    return db("hobbits").insert(hobbit);
}

 function remove(id) {
    return db("hobbits").where({ id }).delete();
}
