const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../jwt.config')

const signup = async (req, res) => {
    try {
        const { username, password, mail, location } = req.body
        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(404).json({ message: `${username} already exists` })
        }

        const newUser = new User({ username, password, mail, location })
        console.log(newUser)
        await newUser.save()
        const token = createToken(newUser)
        user = newUser;
        return res.status(201).json({ token, user: newUser, message: 'User created' })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const foundUser = await User.findOne({ username })
        if (!foundUser) {
            return res.status(404).json({ message: 'Username not found' })
        }
        const correctPassword = await bcrypt.compare(password, foundUser.password)
        if (!correctPassword) {
            return res.status(404).json({ message: 'Passwords are not matching' })
        }
        const token = createToken(foundUser)
        user = foundUser
        return res.status(201).json({token, user: foundUser, message: 'Logged in' })
    } catch (err) {
        return res.status(404).json ({ message: err.message })
    }
}

function createToken(user) {
    return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '24h' })
  }

module.exports = {
    signup,
    login
}