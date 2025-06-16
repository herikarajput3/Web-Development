const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/firstDb')
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database not connected", err));

module.exports = mongoose;
