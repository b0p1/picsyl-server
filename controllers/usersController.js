const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("users")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Warehouses ${err}`));
};

exports.singleUser = async (req, res) => {
  const users = await knex("users")
    .where({ id: req.params.id })
    .then((data) => {
      // If record is not found, respond with 404
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`);
      }

      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving User ${req.params.id} ${err}`)
    );
};

exports.userPosts = (req, res) => {
  knex("posts")
    .where({ user_id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Error retrieving user posts ${req.params.id} ${err}`);
    });
};
