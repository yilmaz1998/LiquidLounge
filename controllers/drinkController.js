const Drink = require('../models/drink')


const indexDrink = async (req, res) => {
    try {
        const drinks = await Drink.find({})
        res.status(200).json(drinks)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const createDrink = async (req, res) => {
    try {
        const newDrink = await new Drink({
            ...req.body,
            user: req.user.user._id
        })
        console.log(newDrink)
        console.log(req.user.user._id)

        const savedDrink = await newDrink.save()
        res.status(200).json(savedDrink)
        console.log(savedDrink);

    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
}

const showDrink = async (req, res) => {
    try {
        const drinkId = req.params.id
        const drink = await Drink.findById(drinkId)
        if (!drink) {
            return res.status(400).json({ error: "Drink not found" })
        }
        res.json(drink)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const updateDrink = async (req, res) => {
    try {
        const updatedDrink = await Drink.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedDrink)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteDrink = async (req, res) => {
    try {
        const deletedDrink = await Drink.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedDrink)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    indexDrink,
    createDrink,
    showDrink,
    updateDrink,
    deleteDrink,
}