const Message = require("../models/messageModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// handlers
const { getAll, getOne, updateOne, deleteOne } = require("./handlersFactory");

// Actions to perform by EVERYONE

// Create New Message
exports.createNewMessage = catchAsync(async (req, res, next) => {
  const { body, user } = req;

  if (user) {
    body.from = user;
  }

  const message = await Message.create(body);

  if (!message) {
    return next(
      new AppError("Message was not created, please try again later.", 400)
    );
  }

  res.status(201).json({
    status: "success",
    data: {
      data: message
    }
  });
});

// Actions to perform by ADMIN ONLY

// Get All Messages
exports.getAllMessages = getAll(Message, {
  path: "from",
  select: "name email photo"
});

// Get Single Message
exports.getSingleMessage = getOne(Message, {
  path: "from",
  select: "name email photo"
});

// Update Single Message
exports.updateMessage = updateOne(Message);

// Delete Single Message
exports.deleteMessage = deleteOne(Message);
