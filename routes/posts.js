const router = require("express").Router();
const postsController = require("../controllers/postsController");
const commentsController = require("../controllers/commentsController");

router.route("/").get(postsController.index);
router.route("/:id").get(postsController.singlePost);
router.route("/:id/comments").get(commentsController.postComments);

module.exports = router;
