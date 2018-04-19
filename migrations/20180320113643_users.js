exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email');
      table.string('hash');
      table.string('username');
      table.string('name');
      table.string('chaoname');
      table.integer('heart');
      table.integer('strength');
      table.integer('good');
      table.integer('bad');
      table.string('role');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
  ]);
};
