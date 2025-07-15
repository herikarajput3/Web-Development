const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/populatePrac")
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err, "failed to connect with database"))

module.exports = mongoose