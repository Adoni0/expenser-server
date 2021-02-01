const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const requireAuth = require('./authRoutes');

router.use(requireAuth);

const Favorites = mongoose.model('Favorites');
const ShopList = mongoose.model('ShopList');

router.get('/favs', async (req, res) => {
    const favs = await Favorites.find();
    res.send(favs);
});

router.get('/shoplist', (req, res) => {
    const list = await ShopList.find();
    res.send(list);
});

router.post('/favs', async (req, res) => {
    const { ingredients, instructions, title, image } = req.body;

    if(!ingredients || !instructions || !title || !image){
        return res.status(422).send('Must provide all neccessary fields for favorites');
    }

    try {
        const favs = new Favorites({ ingredients, instructions, title, image });
        await favs.save();
        res.send(favs);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

router.post('/shoplist', async (req, res) => {
    const { ingredients } = req.body;

    if(!ingredients) {
        return res.status(422).send('You must specify ingredients to add.')
    }
    try{
        const list = new ShopList({ ingredients });
        await list.save();
        res.send(list);
    } catch(err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router;