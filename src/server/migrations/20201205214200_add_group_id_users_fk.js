exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.integer('group_id').unsigned().references('id').inTable('groups');
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropForeign('group_id');
    table.dropColumn('group_id');
  });
};
