const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const validator = require("express-validator")

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email address"
    }
  },
  password: {
    type: String,
    required: [true, "Password required"],
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model("user", UserSchema)