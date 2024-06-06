const Favorite = require('../models/favorite');

const createFavorite = async (req, res) => {
    console.log(req.body)
    try {
        const {classicDrinkId, usersDrinkId} = req.body
        const userId = req.user.user._id
        const existingFavorite = await Favorite.findOne({ classic: classicDrinkId, drink: usersDrinkId, user: userId });
        if (existingFavorite) {
            return res.status(400).json({ error: "Drink is already in favorites" });
        }

        const newFavorite = new Favorite({
            classic: classicDrinkId,
            drink: usersDrinkId,
            user: userId
        })
        console.log(newFavorite)
        await newFavorite.save()
        res.status(201).json(newFavorite)
    } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

const getFavorite = async (req, res) => {
    try {
        const currentUser = req.user.user._id;
        const favorites = await Favorite.find({ user: currentUser })
        .populate({
            path: 'classic',
            model: 'classic'
        })
        .populate({
            path: 'drink',
            model: 'drink'
        })
        .populate('user')
        res.status(200).json(favorites);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteFavorite = async (req, res) => {
    try {
        const deletedFavorite = await Favorite.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedFavorite);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createFavorite,
    getFavorite,
    deleteFavorite
};
