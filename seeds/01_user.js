const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user").del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([{
          "email": "rob@rob.com",
          "password": bcrypt.hashSync("robpassword"),
        },
        {
          "email": "will@will.com",
          "password": bcrypt.hashSync("willpassword"),
        },
        {
          "email": "user@user.com",
          "password": bcrypt.hashSync("userpassword"),
        },
      ]);
    });
};
