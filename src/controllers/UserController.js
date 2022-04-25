const knex = require('../database')

module.exports = {
  async index(req, res) {
    const users = await knex("users");
    return res.status(200).json(users);
  },
};
