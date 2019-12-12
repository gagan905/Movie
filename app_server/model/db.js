const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://admin:admin@cluster0-3xq16.mongodb.net/MovieDB?retryWrites=true&w=majority';
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

require('./movie');

