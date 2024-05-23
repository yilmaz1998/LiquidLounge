const Favorite = require('../models/favorite');

const createFavorite = async (req, res) => {
    try {
        const favorite = { ...req.body }
        if (req.user) {
            favorite.user = req.user.userId
        }
        const newFavorite = new Favorite(favorite)
        await newFavorite.save()
        res.status(201).json(newFavorite)
    } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

const getFavorite = async (req, res) => {
    try {
        const favorites = await Favorite.findById({ user: req.user.userId })
        .populate('drink')
        .populate("user")
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
