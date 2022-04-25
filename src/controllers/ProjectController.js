const knex = require("../database");

module.exports = {
  async index(req, res) {
    try {
      const { user_id } = req.query;
      const query = knex("projects");

      if (user_id) {
        query
          .where({ user_id })
          .join("users", "users.id", "=", "projects.user_id")
          .select("projects.*", "users.username");
      }

      const projects = await query;
      return res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const { title, user_id } = req.body;
      await knex("projects").insert({ title, user_id });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { username } = req.body;
      const { id } = req.params;

      await knex("users").update({ username }).where({ id });
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).del();

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
