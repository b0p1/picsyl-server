const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

router.route("/").get((req, res) => {
  knex("comments")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving comments ${err}`));
});

router.route("/").post((req, res) => {
  if (!req.body.text) {
    return res.status(400).send("Please make sure to provide a comment");
  }
  const comment = req.body.text;
  const userID = req.body.user_id;
  const postID = req.body.post_id;
  console.log(req.text, req.body.user_id, req.body.post_id);
  knex("comments")
    .insert({ text: comment, user_id: userID, post_id: postID })
    .then((data) => {
      const newCommentsURL = `/comments/${data[0]}`;
      res
        .status(201)
        .location(newCommentsURL)
        .send(`Comment with has been created`);
    })
    .catch((err) => res.status(400).send(`Error creating comment: ${err}`));
});

module.exports = router;
