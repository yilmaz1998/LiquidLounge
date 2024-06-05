const Comment = require('../models/comment')
const Drink = require('../models/drink')


const createComment = async (req, res) => {
    console.log(req.body)
    try {
      const { drinkId, title, comment} = req.body
      if (!comment) {
        return res.status(400).json({ message: "Comment text is required" });
    }
      const newComment = new Comment({
        title: title,
        comment: comment,
        user: req.user.user._id,
        drink: drinkId
      })
      console.log(newComment)
      await newComment.save()

      await Drink.findByIdAndUpdate(drinkId, { $push: { comments: newComment._id } })
      res.status(201).json({newComment})
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

const getComment = async (req, res) => {
    try {
        const drinkId = req.params.id
        const comments = await Comment.find({ drink: drinkId }).populate('user')
        res.status(200).json(comments)
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message })
    }
}

const updateComment = async (req, res) => {
    try {
        const commentId = req.params.id
        const userId = req.user.user._id

        const comment = await Comment.findById(commentId)
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" })
        }
        if (comment.user.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized: You are not the owner of this comment" })
        }
        const updatedComment = await Comment.findByIdAndUpdate(commentId, req.body, { new: true })
        res.status(200).json(updatedComment)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
};


const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.id
        const userId = req.user.user._id

        const comment = await Comment.findById(commentId)
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" })
        }
        if (comment.user.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized: You are not the owner of this comment" })
        }
        const deletedComment = await Comment.findByIdAndDelete(commentId)
        res.status(200).json(deletedComment)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
};


module.exports = {
    createComment,
    getComment,
    deleteComment,
    updateComment
}