const express = require("express");
const router = express.Router();

// blogpost controller
const {
  getAllBlogposts,
  getSingleBlogpost,
  createNewBlogpost,
  updateBlogpost,
  deleteBlogpost,
  uploadBlogpostImage,
  resizeBlogpostImage
} = require("../controllers/blogpostController");

// auth controller
const { protect, restrictTo } = require("../controllers/authController");

// OPEN
router.route("/").get(getAllBlogposts);
router.route("/:id").get(getSingleBlogpost);

// PROTECTED
router.use(protect);
// like dislike mechanism

// RESTRICTED
router.use(restrictTo("admin", "owner"));

router
  .route("/")
  .post(uploadBlogpostImage, resizeBlogpostImage, createNewBlogpost);

router
  .route("/:id")
  .patch(updateBlogpost)
  .delete(deleteBlogpost);

module.exports = router;
