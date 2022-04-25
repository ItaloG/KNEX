/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { username: 'Italo' },
    { username: 'Marcos' }
  ]);
};
