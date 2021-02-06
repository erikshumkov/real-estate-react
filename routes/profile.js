const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")
const auth = require("../middleware/auth")
const Profile = require("../models/Profile")
const User = require("../models/User")

// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.user.id }).populate("user", ["name", "email"])

    if (profile === null) {
      const user = await User.findById(req.user.id).select("-password")

      if (!user) {
        return res.status(400).json({ msg: "No user found" })
      }

      return res.json(user)
    }

    res.json({ profile })
  } catch (err) {
    return res.status(500).send("Server Error")
  }
})

// @route  POST api/profile/me
// @desc   Create or update user profile
// @access Private
router.post("/me", auth, async (req, res) => {

  let profileObj = { ...req.body }

  profileObj.user = req.user.id

  try {
    let profile = await Profile.findOne({ user: req.user.id })

    profile = new Profile(profileObj)

    await profile.save()
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route  DELETE api/profile/me/:id
// @desc   Delete single profile item
// @access Private
router.delete("/me/:id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id, _id: req.params.id })


    if (!profile) {
      return res.status(404).json({ msg: "Home not found" })
    }

    await profile.remove()

    res.json({ msg: "Home removed" })
  } catch (err) {
    console.error(err.message)
    return res.status(500).send("Server Error")
  }
})

// @route  DELETE api/profile
// @desc   Delete profile, user & posts
// @access Private

// @route  PUT api/profile/experience
// @desc   Add profile experience
// @access Private

module.exports = router