const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("posts")
      .select("post_id", "post_img", "post_desc")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => res.status(400).send(`Error retrieving posts ${err}`));
  };

  exports.singlePost = (req, res) => {
    knex("posts")
      .where({ post_id: req.params.id })
      .innerJoin("users", "posts.user_id", "users.user_id")
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
        res.status(400).send(`Error retrieving post ${req.params.id} ${err}`)
      );
  };

  