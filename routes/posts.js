const express = require("express")
const auth = require("../middleware/auth")
const Post = require("../models/Post")
const router = express.Router()

// @route GET api/posts
// @desc Get all homes
// @access Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route POST api/posts
// @desc Add single home
// @access Private
router.post("/", auth, async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()

    res.status(201).json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route REMOVE api/posts/remove/:id
// @access Private
router.delete("/remove/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      res.status(404).json({ msg: "No post with that ID found" })
    }

    await post.remove()
    res.json({ msg: "Post removed" })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router