const Classic = require('../models/classic')


const getClassicDrink = async (req, res) => {
    try {
        const classicDrinks = await Classic.find({})
        res.status(200).json(classicDrinks)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
}


const showClassicDrink = async (req, res) => {
    try {
        const classicDrinkId = req.params.id
        const classicDrink = await Classic.findById(classicDrinkId)
        if (!classicDrink) {
            return res.status(400).json({ error: "Classic Drink not found" })
        }
        res.status(200).json(classicDrink)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    getClassicDrink,
    showClassicDrink,
}