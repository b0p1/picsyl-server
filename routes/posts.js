const router = require('express').Router();
const postsController = require('../controllers/postsController');

router.route('/').get(postsController.index);

module.exports = router;