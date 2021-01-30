const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    ingredients: {
        type: String,
        required: true
    }
});

mongoose.model('ShopList', listSchema);