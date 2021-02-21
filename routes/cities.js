const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")
const City = require("../models/City")

// @route GET api/cities
// @desc Get all cities
// @access Public
router.get("/", async (req, res) => {
  try {
    const city = await City.find()
    res.json(city)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route POST api/cities
// @desc Add single city
// @access Private
router.post("/", async (req, res) => {
  try {
    const city = new City(req.body)
    await city.save()

    res.status(201).json(city)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route REMOVE api/cities/remove/:id
// @desc Remove single city
// @access Private
router.delete("/remove/:id", async (req, res) => {
  try {
    const city = await City.findById(req.params.id)

    if (!city) {
      res.status(404).json({ msg: "No city with that ID found" })
    }

    await city.remove()
    res.json({ msg: `City (${city.city}) removed` })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router