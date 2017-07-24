
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("user", table => {
    table.increments("id");
    table.string("email").unique().notNull();
    table.string("password").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
