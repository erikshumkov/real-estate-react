const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CitySchema = new Schema({
  city: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  zoom: {
    type: Number,
    required: true
  }
})

module.exports = City = mongoose.model("city", CitySchema)