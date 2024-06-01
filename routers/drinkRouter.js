const express = require("express")
const router = express.Router()
const drinkController = require('../controllers/drinkController')
const authMiddleware = require('../middleware/authenticate')


router.get("/", authMiddleware, drinkController.indexDrink)
router.post("/new", authMiddleware, drinkController.createDrink)
router.get("/:id", authMiddleware, drinkController.showDrink)
router.put("/:id", authMiddleware, drinkController.updateDrink)
router.delete("/:id",authMiddleware,drinkController.deleteDrink)




module.exports = router