const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: [true, "Feedback cannot be empty."],
      trim: true,
      minlength: [1, "Feedback must consist of at least 1 characters."],
      maxlength: [500, "Feedback must consist of less than 500 characters."]
    },
    rating: {
      type: String,
      enum: ["1", "2", "3", "4", "5"],
      default: "5"
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Feedback must have an author."]
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

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
