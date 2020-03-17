const multer = require("multer");
const sharp = require("sharp");

const Blogpost = require("../models/blogpostModel");
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

// Actions to perform by EVERYONE

// Get All Blogposts
exports.getAllBlogposts = getAll(Blogpost);

// Get Single Blogpost
exports.getSingleBlogpost = getOne(Blogpost, {
  path: "author",
  select: "name photo"
});

// Actions to perform by ADMIN ONLY

// storage properties - saving image in memory buffer
const multerStorage = multer.memoryStorage();

// filter properties. Is file image?
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("File must be an image.", 400), false);
  }
};

// use upload properties
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

// Image upload middleware for /blogposts route
exports.uploadBlogpostImage = upload.single("image");

// Image resizing and convertion
exports.resizeBlogpostImage = catchAsync(async (req, res, next) => {
  // test for required fields right here, before saving image into DB
  const { title, theme, content } = req.body;
  console.log(title, theme, content);
  if (!title || !theme || !content) {
    return next(new AppError("Blogpost title, theme or content are missing."));
  }

  // if no file in req - return asap to next middleware
  if (!req.file) return next();

  // store blogpost image filepath name in file.filename
  req.file.filename = `uploads/images/posts/post-${
    req.user._id
  }-${Date.now()}.jpeg`;

  // perform sharpening
  await sharp(req.file.buffer)
    .resize(1170, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 50 })
    .toFile(`${req.file.filename}`);

  next();
});

// Create New Blogpost
exports.createNewBlogpost = catchAsync(async (req, res, next) => {
  const blogpostData = req.body;

  if (req.file) {
    blogpostData.image = req.file.filename;
  }

  // get author
  blogpostData.author = req.user._id;

  console.log(blogpostData);

  //   const blogpost = await Blogpost.create(blogpostData);

  const blogpost = {};

  if (!blogpost) {
    return next(
      new AppError("Blogpost was not created, pleast try again later.", 400)
    );
  }

  res.status(201).json({
    status: "success",
    data: {
      data: blogpost
    }
  });
});

// Update Single Blogpost
exports.updateBlogpost = updateOne(Blogpost);

// Delete Single Blogpost
exports.deleteBlogpost = deleteOne(Blogpost);
