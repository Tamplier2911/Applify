const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blogpost must have a title."],
    trim: true,
    maxlength: [
      80,
      "Blogpost title must not consist of more than 80 characters."
    ],
    minlength: [1, "Blogpost title must consist of 1 character or more."]
  },
  theme: {
    type: String,
    required: [true, "Blogpost must have a theme."],
    trim: true,
    maxlength: [
      80,
      "Blogpost theme must not consist of more than 80 characters."
    ],
    minlength: [1, "Blogpost theme must consist of 1 character or more."]
  },
  content: {
    type: String,
    required: [true, "Blogpost must have a content"],
    trim: true
  },
  image: {
    type: String,
    default: "uploads/images/posts/default.jpg",
    trim: true
  },
  likes: {
    type: Number,
    default: 0
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Blogpost must have an author."]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Blogpost = mongoose.model("Blogpost", blogpostSchema);
module.exports = Blogpost;
