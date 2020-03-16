const Message = require("../models/messageModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// handlers
const { getAll, getOne, updateOne, deleteOne } = require("./handlersFactory");

// everyone can create message
// exports.createNewMessage = createOne(Message);

exports.createNewMessage = catchAsync(async (req, res, next) => {
  const { body } = req;
  const { user } = req;
  console.log(body, user);
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

// only admin can read, update and delete message.
exports.getAllMessages = getAll(Message, {
  path: "from",
  select: "name email photo"
});

exports.getSingleMessage = getOne(Message, {
  path: "from",
  select: "name email photo"
});

exports.updateMessage = updateOne(Message);

exports.deleteMessage = deleteOne(Message);
