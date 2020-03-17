const mongoose = require("mongoose");
const validator = require("validator");
const bcrytp = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
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
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Email must match validation."]
    },
    photo: {
      type: String,
      default: "uploads/images/users/default.jpg",
      trim: true
    },
    about: {
      type: String,
      default: "",
      trim: true,
      maxlength: [700, "About must not consist of more than 700 characters."]
    },
    likedBlogposts: [String],
    role: {
      type: String,
      enum: ["user", "admin", "owner"],
      default: "user"
    },
    password: {
      type: String,
      required: [true, "Please enter your password."],
      minlength: [8, "Password must have at least 8 characters."],
      select: false
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password."],
      validate: {
        // keep in mind, that this is ONLY going to work on create and save.
        validator: function(el) {
          return el === this.password;
        },
        message: "Confirmation password must match original."
      }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpired: Date,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    }
  },
  {
    versionKey: false
  }
);

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrytp.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 2000;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrytp.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function(JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // if JWT less than Changed - then return true (password was changed)
    // if JWT greater than Changed - then return false (password was not changed before issuing)
    return JWTTimeStamp < changedTimeStamp;
  }

  // false means password has not been changed
  return false;
};

userSchema.methods.createPasswordResetToken = function() {
  // reset token creation
  const resetToken = crypto.randomBytes(32).toString("hex");

  // reset token hashing storing in DB
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // token expires in 10 minutes after time when it was issued
  this.passwordResetExpired = Date.now() + 10 * 60 * 1000;

  // returning plaint token
  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
