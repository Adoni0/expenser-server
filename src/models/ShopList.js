const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ingredients: {
        type: String,
        required: true
    }
});

mongoose.model('ShopList', listSchema);