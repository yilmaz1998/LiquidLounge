const express = require("express")
const router = express.Router()
const favoriteController = require('../controllers/favoriteController')


router.post("/new", favoriteController.createFavorite)
router.get("/", favoriteController.getFavorite)
router.delete("/:id", favoriteController.deleteFavorite)


module.exports = router