const mongoose = require('mongoose')

const classicSchema = new mongoose.Schema({
    name:{type:String, required:true, unique:true},
    img:{type:String, required:true},
    ingredients:{type:[String], required:true},
    method:{type:String, required:true},
})

module.exports = mongoose.model('classic', classicSchema)
