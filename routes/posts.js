const router = require("express").Router();
const postsController = require("../controllers/postsController");

router.route("/").get(postsController.index).post(postsController.addPost);
router.route("/:id").get(postsController.singlePost);

module.exports = router;
