const Comment = require('../models/comment')
const Drink = require('../models/drink')


const createComment = async (req, res) => {
    try {
      const { drinkId, title, comment} = req.body
      if (!comment) {
        return res.status(400).json({ message: "Comment text is required" });
    }
      const newComment = new Comment({
        title,
        comment: comment,
        user: req.user.id,
        drink: drinkId
      })
      await newComment.save()

      await Drink.findByIdAndUpdate(drinkId, { $push: { comments: newComment._id } })
      res.status(201).json({newComment})
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

const getComment = async (req, res) => {
    try {
        const commentId = req.params.id
        const comment = await Comment.findById(commentId)
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" })
        }
        res.status(200).json(comment)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
};

const updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedComment)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
};

const deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedComment)
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message })
    }
};

module.exports = {
    createComment,
    getComment,
    deleteComment,
    updateComment
}