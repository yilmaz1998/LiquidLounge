const express = require("express")
const router = express.Router()
const drinkController = require('../controllers/drinkController')


router.get("/", drinkController.indexDrink)
router.post("/new", drinkController.createDrink)
router.get("/:id", drinkController.showDrink)
router.put("/:id", drinkController.updateDrink)
router.delete("/:id", drinkController.deleteDrink)




module.exports = router