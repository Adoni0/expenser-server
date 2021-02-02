const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ingredients: [
        {
            type: String
        }
    ],
    instructions: [
        {
            type: String
        }
    ],
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

mongoose.model('Favorites', favoritesSchema);