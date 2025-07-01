const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/passport')
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err, "Database connection failed"));

module.exports = mongoose;