const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  sqmeter: {
    type: Number,
    required: true
  },
  homeType: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  route: [
    {
      city: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      }
    }
  ],
  coords: [
    {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    }
  ],
  image: {
    type: String,
    required: true
  }
})

module.exports = Post = mongoose.model("post", PostSchema)