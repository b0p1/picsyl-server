const knex = require("knex")(require("../knexfile"));

exports.index = (req, res) => {
  knex("posts")
    // .select("post_id", "post_img", "post_desc")
    .innerJoin("users", "posts.user_id", "users.user_id")
    .then((data) => {
      knex("likes")
        .then((likes) => {
          const obj = data[0];
          obj.likes = likes;
          res.status(200).json(data);
        });
    })
    .catch((err) => res.status(400).send(`Error retrieving posts ${err}`));
};

exports.singlePost = (req, res) => {
  knex("posts")
    .where({ post_id: req.params.id })
    .innerJoin("users", "posts.user_id", "users.user_id")
    .then((data) => {
      knex("likes")
        .where("post_id", req.params.id)
        .then((likes) => {
          const obj = data[0];
          obj.likes = likes;
          res.status(200).json(obj);
        });
      // If record is not found, respond with 404
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`);
      }
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving post ${req.params.id} ${err}`)
    );
};

// exports.addPost = (req, res) => {
//   // Validation
//   if (!req.body.img || !req.body.desc) {
//     return res
//       .status(400)
//       .send("Please make sure to provide an image and description");
//   }

//   knex("posts")
//     .insert(req.body)
//     .then((data) => {
//       // For POST requests we need to respond with 201 and the location of the newly created record
//       const newPostURL = `/posts/${data[0]}`;
//       res.status(201).location(newPostURL).send(newPostURL);
//     })
//     .catch((err) => res.status(400).send(`Error creating Post: ${err}`));
// };
