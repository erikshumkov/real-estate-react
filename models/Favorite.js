const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FavoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    required: true
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

module.exports = Favorite = mongoose.model("favorite", FavoriteSchema)