const express = require("express")
const router = express.Router()
const classicDrink = require('../controllers/classicDrinkController')

router.get("/", classicDrink.getClassicDrink)

router.get("/:id", classicDrink.showClassicDrink)

module.exports = router