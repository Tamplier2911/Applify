const fs = require("fs");
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");
// const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// handlers
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
} = require("./handlersFactory");

const filterObject = (obj, ...allowedFields) => {
  const filtered = {};

  Object.keys(obj).forEach(field => {
    if (allowedFields.includes(field)) {
      filtered[field] = obj[field];
    }
  });

  return filtered;
};

/*
const signToken = id => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};
*/

// storage properties - SAVING IN MEMORY BUFFER
const multerStorage = multer.memoryStorage();

// filter properties. Is file image?
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("File must be an image.", 400), false);
  }
};

// user properties for upload
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

// Photo upload middleware for /updateMe route
exports.uploadUserPhoto = upload.single("photo");

// Photo resizing and conversion
exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  // if no file in request - return asap to next middleware
  if (!req.file) return next();

  req.file.filename = `uploads/images/users/user-${
    req.user._id
  }-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`${req.file.filename}`);

  next();
});

// Update logged in User
exports.updateMe = catchAsync(async (req, res, next) => {
  // if user trying to update password - throw error
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "You cannot update password on this route, please use /updateMyPassword.",
        400
      )
    );
  }

  // filter request body in case of avoiding unwanted fields
  const filteredBody = filterObject(req.body, "name", "email", "about");

  // if we have req.file from multer middleware
  // we store filename as a photo property
  if (req.file) {
    filteredBody.photo = req.file.filename;

    // here we perform removing of old picture
    // name of which we now also have to send by form
    const { oldPhoto } = req.body;
    const oldPhotoArr = oldPhoto.split("/");
    const filename = oldPhotoArr[oldPhotoArr.length - 1];

    // if its not default image - perform delete on old image
    if (filename && filename !== "default.jpg") {
      fs.unlink(
        path.join(__dirname, "..", "uploads/images/users", filename),
        err => {
          if (err) throw err;
          console.log(`${filename} successfully deleted.`);
        }
      );
    }
  }

  // find user by id and update document using filtered body
  const userID = req.user._id;
  const updatedUser = await User.findByIdAndUpdate(userID, filteredBody, {
    new: true,
    runValidators: true
  });

  const { photo, name, email, about, _id } = updatedUser;
  const updatedUserObject = { id: _id, name, email, photo, about };

  // send response with updated user
  res.status(200).json({
    status: "success",
    data: {
      user: updatedUserObject
    }
  });
});

// Remove logged in User
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: "success",
    data: null
  });
});

// Actions to perform by ADMIN ONLY

// Get All Users
exports.getAllUsers = getAll(User);

// Get Single User
exports.getSingleUser = getOne(User);

// Create Single User
exports.createNewUser = createOne(User);

// Update Single User - NOT PASSWORD
exports.updateUser = updateOne(User);

// Delete Single User
exports.deleteUser = deleteOne(User);
