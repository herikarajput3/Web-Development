const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost:27017/E-com")
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err, "Database Connection Failed"));

module.exports = mongoose;