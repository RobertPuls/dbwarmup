
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dog").del()
    .then(function () {
      // Inserts seed entries
      return knex("dog").insert([
        {
          "name": "dog1",
          "user_id": 1
        },
        {
          "name": "dog2",
          "user_id": 1
        },
        {
          "name": "dog3",
          "user_id": 2
        },
        {
          "name": "dog4",
          "user_id": 2
        },
        {
          "name": "dog5",
          "user_id": 3
        }
      ]);
    });
};
