const knex = require("knex")(require("../knexfile"));

exports.index = async (req, res) => {
  const posts = await knex("posts")
    .leftJoin("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "users.username",
      "users.img as user_img",
      "user_id",
      "posts.img",
      "posts.desc"
    )
    .orderBy("posts.id", "desc");
  const allLikes = await knex("likes");
  const postsWithLikes = posts.map((post) => {
    const likes = allLikes.filter((like) => like.post_id === post.id);
    post.likes = likes;
    return post;
  });
  //  console.log(postsWithLikes);
  const allComments = await knex("comments")
    .innerJoin("users", "comments.user_id", "users.id")
    .select(
      "users.username",
      "users.id as user_id",
      "users.img as user_img",
    );

  const postsWithLikesAndComments = postsWithLikes.map((post) => {
    const comments = allComments.filter(
      (comment) => comment.post_id === post.id
    );
    post.comments = comments;
    return post;
  });

  res.json(postsWithLikesAndComments);

  console.log(allComments);
};

exports.singlePost = async (req, res) => {
  const posts = await knex("posts")
    .where({ "posts.id": req.params.id })
    .innerJoin("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "users.username",
      "users.id as user_id",
      "users.img as user_img",
      "posts.img",
      "posts.desc"
    );

  const likes = await knex("likes").where("post_id", req.params.id);
  const comments = await knex("comments")
    .where("post_id", req.params.id)
    .leftJoin("users", "comments.user_id", "users.id")
    .select(
      "comments.id",
      "users.username",
      "comments.text",
      "users.img as user_img"
    );

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
  if (!req.file || !req.body.desc) {
    return res
      .status(400)
      .send("Please make sure to provide an image and description");
  }
  const fileImage = req.file.filename;
  const fileDesc = req.body.desc;
  const userID = req.body.user_id;

  knex("posts")
    .insert({ img: fileImage, desc: fileDesc, user_id: userID })
    .then((data) => {
      const newPostURL = `/posts/${data[0]}`;
      res.status(201).location(newPostURL).send(newPostURL);
    })
    .catch((err) => res.status(400).send(`Error creating Post: ${err}`));
};
