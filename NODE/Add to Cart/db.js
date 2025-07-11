const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/AddToCart')
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err, 'Database not connected'))

module.exports = mongoose