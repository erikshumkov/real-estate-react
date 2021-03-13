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
    const profile = await Profile.find({ userId: req.user.id }).populate("user", ["name", "email"])

    if (profile === null) {
      const user = await User.findById(req.user.id).select("-password")

      if (!user) {
        return res.status(400).json({ msg: "No user found" })
      }

      return res.json(user)
    }

    res.json(profile)
  } catch (err) {
    return res.status(500).send("Server Error")
  }
})

// @route  POST api/profile/me
// @desc   Create or update user profile
// @access Private
router.post("/me", auth, async (req, res) => {

  const profileObj = {
    userId: req.user.id,
    address: req.body.homeAddress
  }

  try {
    let profile = await Profile.findOne({ userId: profileObj.userId, address: req.body.homeAddress })

    if (!profile) {
      profile = new Profile(profileObj)
      profile.save()
      res.json(profile)
    } else {
      console.log("Home already exist in DB")
      res.json({})
    }

  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route  DELETE api/profile/me/:id
// @desc   Delete single profile item
// @access Private
router.delete("/me/:address", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id, address: req.params.address })


    if (!profile) {
      return res.status(404).json({ msg: "Home not found" })
    }

    await profile.remove()

    res.json({ msg: "Home removed", profile })
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