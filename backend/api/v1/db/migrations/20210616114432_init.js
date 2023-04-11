
exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id');
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.timestamp('created_at', { useTz: false });
        })
        .createTable('contact', (table) => {
            table.increments('id').unsigned();
            table.string('name', 50).notNullable()
            table.string('phone', 30).notNullable()
            table.string('company', 30).notNullable()
            table.string('email', 50).notNullable()
            table.text('message').notNullable()
            table.date('created_at');
        })
    }

exports.down = function (knex) {
    return knex.schema
    .dropTable('contact')
    .dropTable('users')



        
};
