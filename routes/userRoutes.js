const express = require("express");
const router = express.Router();

// user controller
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
  uploadUserPhoto,
  resizeUserPhoto,
  updateMe,
  deleteMe
} = require("../controllers/userController");

// auth controller
const {
  protect,
  restrictTo,
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
  isLoggedIn,
  getUserObject
} = require("../controllers/authController");

// signup
router.post("/signup", signup);

// login
router.post("/login", login);

// logout
router.get("/logout", logout);

// forgot password
router.post("/forgotPassword", forgotPassword);

// reset password
router.patch("/resetPassword/:token", resetPassword);

// get user object
router.get("/getMe", isLoggedIn, getUserObject);

// PROTECTED
router.use(protect);

// update user data
router.patch("/updateMe", uploadUserPhoto, resizeUserPhoto, updateMe);

// update password
router.patch("/updateMyPassword", updatePassword);

// make current user inactive - might refactor to delete later
router.delete("/deleteMe", deleteMe);

// RESTRICTED
router.use(restrictTo("admin", "owner"));

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser);

router
  .route("/:id")
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
