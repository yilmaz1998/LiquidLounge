const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    mail: {type:String, required:true, unique:true},
    location: {type:String, required:true}
})

UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 8);
    }
    next();
  });
  

module.exports = mongoose.model('user', UserSchema)