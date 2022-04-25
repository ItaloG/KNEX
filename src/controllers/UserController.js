const knex = require("../database");

module.exports = {
  async index(req, res) {
    const users = await knex("users");
    return res.status(200).json(users);
  },
  async create(req, res, next) {
    try {
      const { username } = req.body;
      await knex("users").insert({username});
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};
