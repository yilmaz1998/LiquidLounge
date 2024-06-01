const express = require("express")
const router = express.Router()
const favoriteController = require('../controllers/favoriteController')
const authMiddleware = require('../middleware/authenticate')

router.post("/new", authMiddleware, favoriteController.createFavorite)
router.get("/", authMiddleware, favoriteController.getFavorite)
router.delete("/:id", authMiddleware, favoriteController.deleteFavorite)


module.exports = router