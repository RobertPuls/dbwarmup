
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("dog", table => {
    table.increments("id");
    table.string("name").notNull();
    table.integer("user_id").references("user.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dog");
};
