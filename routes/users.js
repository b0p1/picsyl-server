const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/").get(usersController.index);
router.route("/:id").get(usersController.singleUser);
router.route('/:id/posts').get(usersController.userPosts);

module.exports = router;
