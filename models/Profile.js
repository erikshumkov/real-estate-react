const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  address: {
    type: String,
    required: true
  }
})

module.exports = Profile = mongoose.model("profile", ProfileSchema)