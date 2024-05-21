const mongoose = require("mongoose")

const favoriteSchema = new mongoose.Schema ({
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'drink'
    }],
    
    user:{type: mongoose.Schema.Types.ObjectId, ref:'user'},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('favorite', favoriteSchema)