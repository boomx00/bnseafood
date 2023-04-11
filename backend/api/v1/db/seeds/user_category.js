const bcryptjs = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex('users').del()
    .then(function async () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'admin',
        password:'$2a$10$OL3CouciF3VgtUnHmA.s5OWYGTjTwO0WAjiA/.O9PvKzjQzTR2UlS'},
      ]);
    });
};
