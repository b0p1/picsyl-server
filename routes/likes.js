const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

router.route("/").post((req, res) => {
  knex("likes")
    .insert(req.body)
    .then((data) => {
      const newLikesURL = `/likes/${data[0]}`;
      res
        .status(201)
        .location(newLikesURL)
        .send(`Like with id: ${req.body.id} has been added`);
    })
    .catch((err) => res.status(400).send(`Error adding like: ${err}`));
});

router.route("/").delete((req, res) => {
  knex("likes")
    .where({ post_id: req.body.post_id, user_id: req.body.user_id })
    .del()
    .then(() => {
      res
        .status(204)
        .send(`Like with id: ${req.body.post_id} has been deleted`);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`Error deleting Likes ${req.body.post_id} ${err}`);
    });
});

module.exports = router;
