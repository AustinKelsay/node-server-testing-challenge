
exports.up = function(knex) {
    return knex.schema.createTable("hobbits", table => {
        table.increments("id");

        table
            .text("name")
            .notNullable()
            .unique();

        table
            .integer("age")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("hobbits");
};
