const mongoose = require('mongoose')

const drinkSchema = ({
    name:{type:String, required:true, unique:true},
    img:{type:String, required:true},
    ingredients:{type:String, required:true},
    method:{type:String, required:true},
    user: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    comments: {type: mongoose.Schema.Types.ObjectId, ref:'comment'}
})

module.exports = mongoose.model('drink', drinkSchema)