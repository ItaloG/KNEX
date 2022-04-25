// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pd',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: 'root'
    }
  }

};
