
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hobbits').del()
    .then(function () {
      // Inserts seed entries
      return knex('hobbits').insert([
        {
          name: "Frodo",
          age: 26,
        },
        {
          name: "Samewise",
          age: 24,
        },
        {
          name: "Pippin",
          age: 26,
        }
      ]);
    });
};
