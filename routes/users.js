const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

// @route  POST api/users
// @desc   Register user
// @access Public
router.post("/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required, atleast 6 characters long").isLength({ min: 6 })
  ],
  async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({ msg: "User already exist" })
      }

      user = new User({
        email,
        password
      })

      // Encrypt password
      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      await user.save()

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