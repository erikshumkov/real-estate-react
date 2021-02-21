const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const config = require("config")
const auth = require("../middleware/auth")
const User = require("../models/User")

// @route  GET api/auth
// @desc   Test route
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

// @route  POST api/auth
// @desc   Login user
// @access Public
router.post("/",
  [
    check("email", "Endast riktiga email adresser fungerar").isEmail(),
    check(
      "password",
      "Ange ett lösenord"
    ).exists()
  ],
  async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ msg: "Användarnamn eller lösenord stämmer inte" })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ msg: "Användarnamn eller lösenord stämmer inte" })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        // config.get("jwtSecret"),
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        })

    } catch (err) {
      console.error(err.message)
      res.status(500).json("Server Error")
    }
  })

module.exports = router