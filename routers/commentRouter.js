const express = require("express")
const router = express.Router()
const commentController = require('../controllers/commentController')
const authMiddleware = require('../middleware/authenticate')


router.post("/new", authMiddleware, commentController.createComment)
router.get("/:id", authMiddleware, commentController.getComment)
router.put("/:id", authMiddleware, commentController.updateComment)
router.delete("/:id", authMiddleware, commentController.deleteComment)


module.exports = router