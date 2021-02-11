const express = require("express")
const connectMDB = require("./config/db")
const cors = require("cors")
const root = require("path").join(__dirname, "client", "build")
require("dotenv").config()

const app = express()

// Connect to MongoDB
connectMDB()

// Init middleware
app.use(cors())
app.use(express.json({ extended: false }))
// app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/posts", require("./routes/posts"))
app.use("/api/cities", require("./routes/cities"))
app.use("/api/users", require("./routes/users"))
app.use("/api/profile", require("./routes/profile"))

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(root))

  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  })
} else {
  app.get("/", (req, res) => {
    res.send("Api running")
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))