
exports.up = function(knex) {
  return knex.schema.alterTable('users', table=>{
    table.string('refresh_token')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', table=>{
    table.dropColumn('refresh_token')
  })
};
