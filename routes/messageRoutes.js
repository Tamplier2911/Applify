const express = require("express");
const router = express.Router();

// message controller
const {
  getAllMessages,
  getSingleMessage,
  createNewMessage,
  updateMessage,
  deleteMessage
} = require("../controllers/messageController");

// auth controller
const {
  protect,
  restrictTo,
  isLoggedIn
} = require("../controllers/authController");

// OPEN
router.route("/").post(isLoggedIn, createNewMessage);

// PROTECTED & RESTRICTED
router.use(protect, restrictTo("admin", "owner"));

router.route("/").get(getAllMessages);

router
  .route("/:id")
  .get(getSingleMessage)
  .patch(updateMessage)
  .delete(deleteMessage);

module.exports = router;
