const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("user")
    .select("id", "user_name", "user_full_name", "user_desc")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users ${err}`));
};
