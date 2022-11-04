const knex = require("knex")(require("../knexfile"));

exports.index = async (_req, res) => {
  const users = await knex("users");

  res.status(200).json(users);

  // .catch((err) => res.status(400).send(`Error retrieving Warehouses ${err}`));
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

exports.userPosts = async (req, res) => {
  const posts = await knex("posts").where({ user_id: req.params.id });
  const allLikes = await knex("likes");
  const postsWithLikes = posts.map((post) => {
    const likes = allLikes.filter((like) => like.post_id === post.id);
    post.likes = likes;
    return post;
  });
  res.json(postsWithLikes);
};
