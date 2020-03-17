const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
      trim: true,
      maxlength: [40, "Name must not consist of more than 40 characters."],
      minlength: [1, "Name must consist of 1 characters or more."]
    },
    email: {
      type: String,
      required: [true, "Please enter your email address."],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Email must match validation."]
    },
    message: {
      type: String,
      required: [
        true,
        "Please provide some information about your problem in 'message' field"
      ],
      trim: true,
      maxlength: [
        2000,
        "Message must not consist of more than 2000 characters."
      ],
      minlength: [1, "Message must consist of 1 characters or more."]
    },
    from: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    versionKey: false
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
