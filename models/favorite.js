const mongoose = require("mongoose")

const favoriteSchema = new mongoose.Schema ({
    classic: { type: mongoose.Schema.Types.ObjectId, ref: 'classic' },
    drink: { type: mongoose.Schema.Types.ObjectId, ref: 'drink' },
    user:{type: mongoose.Schema.Types.ObjectId, ref:'user'},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('favorite', favoriteSchema)