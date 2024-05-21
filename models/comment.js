const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    title:{type: String, required:true},
    comment:{type: String, required:true},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'user'},
    drink:{type: mongoose.Schema.Types.ObjectId, ref:'drink'}
})


module.exports = mongoose.model('comment', commentSchema)