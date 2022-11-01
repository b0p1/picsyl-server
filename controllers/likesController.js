const knex = require("knex")(require("../knexfile"));

exports.postLikes = (_req, res) => {
  knex("likes")
    .select("like_id", "like_num")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving likes ${err}`));
};