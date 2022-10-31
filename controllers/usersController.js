const knex = require("knex")(require("../knexfile"));

exports.singleUser = (req, res) => {
  knex("user")
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
