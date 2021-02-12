const mongoose = require("mongoose")
const config = require("config")
// const db = config.get("mongoURI")

const connectMDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    console.log("MongoDB Connected...")
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectMDB