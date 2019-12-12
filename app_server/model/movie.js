const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    type: {
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rating:{
        type: String,

    }
});

mongoose.model('movie', movieSchema);