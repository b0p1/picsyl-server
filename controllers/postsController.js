const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("posts")
      .select("post_id", "post_img", "post_desc")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => res.status(400).send(`Error retrieving posts ${err}`));
  };