const router = require('express').Router();
const postsController = require('../controllers/postsController');

router.route('/').get(postsController.index);
router.route("/:id").get(postsController.singlePost);

module.exports = router;