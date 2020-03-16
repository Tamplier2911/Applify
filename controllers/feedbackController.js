const Feedback = require("../models/feedbackModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const { getAll, getOne, updateOne, deleteOne } = require("./handlersFactory");

// Actions to perform by AUTHORIZED USERS

// Get All Feedbacks
exports.getAllFeedbacks = getAll(Feedback, {
  path: "user",
  select: "name photo"
});

// Create Single Feedback

exports.createNewFeedback = catchAsync(async (req, res, next) => {
  let { body } = req;
  const { user } = req;
  body.user = user;

  const feedback = await Feedback.create(body);

  if (!feedback) {
    return next(
      new AppError("Feedback was not created, please try again later.", 400)
    );
  }

  res.status(201).json({
    status: "success",
    data: {
      data: feedback
    }
  });
});

// Actions to perform by ADMINS ONLY

// Get Single Feedback
exports.getSingleFeedback = getOne(Feedback, {
  path: "user",
  select: "name photo"
});

// Update Single Feedback
exports.updateFeedback = updateOne(Feedback);

// Delete Single Feedback
exports.deleteFeedback = deleteOne(Feedback);
