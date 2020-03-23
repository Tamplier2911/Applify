const express = require("express");
const router = express.Router();

// feedback controller
const {
  getAllFeedbacks,
  getSingleFeedback,
  createNewFeedback,
  updateFeedback,
  deleteFeedback
} = require("../controllers/feedbackController");

// auth controller
const { protect, restrictTo } = require("../controllers/authController");

// OPEN
router.route("/").get(getAllFeedbacks);

// PROTECTED
router.use(protect);

router.route("/").post(createNewFeedback);

// RESTRICTED
router.use(restrictTo("admin", "owner"));

router
  .route("/:id")
  .get(getSingleFeedback)
  .patch(updateFeedback)
  .delete(deleteFeedback);

module.exports = router;
