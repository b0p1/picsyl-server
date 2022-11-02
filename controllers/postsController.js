const knex = require("knex")(require("../knexfile"));

exports.index = async (req, res) => {
  const posts = await knex("posts").innerJoin(
    "users",
    "posts.user_id",
    "users.user_id"
  );

  const allLikes = await knex("likes");
  const postsWithLikes = posts.map((post) => {
    const likes = allLikes.filter((like) => like.post_id === post.post_id);
    post.likes = likes;
    return post;
  });

  const allComments = await knex("comments");
  const postsWithLikesAndComments = postsWithLikes.map((post) => {
    const comments = allComments.filter(
      (comment) => comment.post_id === post.post_id
    );
    post.comments = comments;
    return post;
  });

  res.json(postsWithLikesAndComments);

  // .catch((err) => res.status(400).send(`Error retrieving posts ${err}`));
};

exports.singlePost = async (req, res) => {
  const posts = await knex("posts")
    .where({ post_id: req.params.id })
    .innerJoin("users", "posts.user_id", "users.user_id");

  const likes = await knex("likes").where("post_id", req.params.id);
  const comments = await knex("comments").where("post_id", req.params.id);

  if (!posts.length) {
    return res
      .status(404)
      .send(`Record with id: ${req.params.id} is not found`);
  } else {
    const post = posts[0];
    post.likes = likes;
    post.comments = comments;
    res.send(post);
  }
};

exports.addPost = (req, res) => {
  // Validation
  if (!req.body.img || !req.body.desc) {
    return res
      .status(400)
      .send("Please make sure to provide an image and description");
  }

  knex("posts")
    .insert(req.body)
    .then((data) => {
      // For POST requests we need to respond with 201 and the location of the newly created record
      const newPostURL = `/posts/${data[0]}`;
      res.status(201).location(newPostURL).send(newPostURL);
    })
    .catch((err) => res.status(400).send(`Error creating Post: ${err}`));
};
