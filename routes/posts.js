const router = require("express").Router();
const postsController = require("../controllers/postsController");
const commentsController = require("../controllers/commentsController");
const likesController = require("../controllers/likesController")

router.route("/").get(postsController.index);
router.route("/:id").get(postsController.singlePost);
router.route("/:id/comments").get(commentsController.postComments);
router.route("/:id/likes").get(likesController.index);

module.exports = router;
