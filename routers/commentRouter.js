const express = require("express")
const router = express.Router()
const commentController = require('../controllers/commentController')


router.post("/new", commentController.createComment)
router.get("/:id", commentController.getComment)
router.put("/:id", commentController.updateComment)
router.delete("/:id", commentController.deleteComment)


module.exports = router