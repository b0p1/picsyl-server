const knex = require("knex")(require("../knexfile"));

exports.postComments = (_req, res) => {
  knex("comments")
    .select("comment_id", "comment_txt")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving comments ${err}`));
};