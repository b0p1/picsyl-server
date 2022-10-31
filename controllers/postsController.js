exports.index = (_req, res) => {
    knex("post")
      .select("id", "post_img", "post_desc")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => res.status(400).send(`Error retrieving posts ${err}`));
  };