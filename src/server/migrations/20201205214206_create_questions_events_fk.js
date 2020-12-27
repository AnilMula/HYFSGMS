exports.up = function (knex) {
  return knex.schema.table('questions', function (table) {
    table
      .integer('event_id')
      .unsigned()
      .references('id')
      .inTable('events')
      .alter();
  });
};

exports.down = function (knex) {
  return knex.schema.table('questions', function (table) {
    table.dropForeign('event_id');
    table.dropColumn('event_id');
  });
};
