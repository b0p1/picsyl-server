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
        .send(`Like with id: ${req.body.id} has been created`);
    })
    .catch((err) => res.status(400).send(`Error creating Post: ${err}`));
});

router.route("/").delete((req, res) => {
  knex("likes")
    .where({ id: req.params.id })
    .then(() => {
      res.status(204).send(`Like with id: ${req.params.id} has been deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Warehouse ${req.params.id} ${err}`)
    );
});

module.exports = router;
