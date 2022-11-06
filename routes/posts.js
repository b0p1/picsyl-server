const router = require("express").Router();
const postsController = require("../controllers/postsController");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.route("/").get(postsController.index);
router.post("/", upload.single("file"), postsController.addPost);
router.route("/:id").get(postsController.singlePost);

module.exports = router;
